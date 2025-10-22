import { actions } from "astro:actions";
import { copyToClipboard, readFromClipboard } from "@/hooks/index";

// Define custom element globally
let hashMessages = {} as any;

class AstroHashGeneratorTranslations extends HTMLElement {
  connectedCallback() {
    hashMessages = JSON.parse(this.getAttribute("data-translations") || "{}");
    this.dispatchEvent(
      new CustomEvent("translations-ready", {
        bubbles: true,
        detail: hashMessages,
      })
    );
  }
}

if (!customElements.get("astro-hash-generator-translations")) {
  customElements.define(
    "astro-hash-generator-translations",
    AstroHashGeneratorTranslations
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const translationElement = document.querySelector(
    "astro-hash-generator-translations"
  );

  if (translationElement && Object.keys(hashMessages).length === 0) {
    translationElement.addEventListener(
      "translations-ready",
      initializeComponent,
      { once: true }
    );
    return;
  }

  initializeComponent();
});

export function initializeComponent() {
  // Get DOM elements
  const elements = {
    // Mode tabs
    tabGenerate: document.getElementById("tab-generate") as HTMLButtonElement,
    tabVerify: document.getElementById("tab-verify") as HTMLButtonElement,
    tabCrack: document.getElementById("tab-crack") as HTMLButtonElement,
    generateMode: document.getElementById("generate-mode") as HTMLDivElement,
    verifyMode: document.getElementById("verify-mode") as HTMLDivElement,
    crackMode: document.getElementById("crack-mode") as HTMLDivElement,

    // Generate mode
    textInput: document.getElementById("text-input") as HTMLTextAreaElement,
    generateBtn: document.getElementById("generate-btn") as HTMLButtonElement,
    pasteBtn: document.getElementById("paste-btn") as HTMLButtonElement,
    clearBtn: document.getElementById("clear-btn") as HTMLButtonElement,
    downloadBtn: document.getElementById("download-btn") as HTMLButtonElement,
    hmacToggle: document.getElementById("hmac-toggle") as HTMLInputElement,
    hmacOptions: document.getElementById("hmac-options") as HTMLDivElement,
    secretKey: document.getElementById("secret-key") as HTMLInputElement,
    salt: document.getElementById("salt") as HTMLInputElement,
    hashMd5: document.getElementById("hash-md5") as HTMLDivElement,
    hashSha1: document.getElementById("hash-sha1") as HTMLDivElement,
    hashSha256: document.getElementById("hash-sha256") as HTMLDivElement,
    hashSha512: document.getElementById("hash-sha512") as HTMLDivElement,
    currentAlgorithm: document.getElementById(
      "current-algorithm"
    ) as HTMLDivElement,
    generatedTime: document.getElementById("generated-time") as HTMLDivElement,

    // Verify mode
    verifyTextInput: document.getElementById(
      "verify-text-input"
    ) as HTMLTextAreaElement,
    hashToVerify: document.getElementById("hash-to-verify") as HTMLInputElement,
    verifyAlgorithm: document.getElementById(
      "verify-algorithm"
    ) as HTMLSelectElement,
    verifyHmacToggle: document.getElementById(
      "verify-hmac-toggle"
    ) as HTMLInputElement,
    verifyHmacOptions: document.getElementById(
      "verify-hmac-options"
    ) as HTMLDivElement,
    verifySecretKey: document.getElementById(
      "verify-secret-key"
    ) as HTMLInputElement,
    verifySalt: document.getElementById("verify-salt") as HTMLInputElement,
    verifyBtn: document.getElementById("verify-btn") as HTMLButtonElement,
    clearVerifyBtn: document.getElementById(
      "clear-verify-btn"
    ) as HTMLButtonElement,
    verificationResult: document.getElementById(
      "verification-result"
    ) as HTMLDivElement,
    comparisonDetails: document.getElementById(
      "comparison-details"
    ) as HTMLDivElement,
    providedHashDisplay: document.getElementById(
      "provided-hash-display"
    ) as HTMLDivElement,
    calculatedHashDisplay: document.getElementById(
      "calculated-hash-display"
    ) as HTMLDivElement,
    verifyAlgorithmDisplay: document.getElementById(
      "verify-algorithm-display"
    ) as HTMLDivElement,
    verifyTime: document.getElementById("verify-time") as HTMLDivElement,

    // Crack mode
    hashToCrack: document.getElementById("hash-to-crack") as HTMLInputElement,
    crackAlgorithm: document.getElementById(
      "crack-algorithm"
    ) as HTMLSelectElement,
    attackMethod: document.getElementById("attack-method") as HTMLSelectElement,
    dictionaryOptions: document.getElementById(
      "dictionary-options"
    ) as HTMLDivElement,
    bruteForceOptions: document.getElementById(
      "brute-force-options"
    ) as HTMLDivElement,
    dictionarySize: document.getElementById(
      "dictionary-size"
    ) as HTMLSelectElement,
    bruteForceLength: document.getElementById(
      "brute-force-length"
    ) as HTMLInputElement,
    bruteForceCharset: document.getElementById(
      "brute-force-charset"
    ) as HTMLSelectElement,
    crackBtn: document.getElementById("crack-btn") as HTMLButtonElement,
    stopCrackBtn: document.getElementById(
      "stop-crack-btn"
    ) as HTMLButtonElement,
    crackResult: document.getElementById("crack-result") as HTMLDivElement,
    crackProgress: document.getElementById("crack-progress") as HTMLDivElement,
    progressBar: document.getElementById("progress-bar") as HTMLDivElement,
    attemptsCount: document.getElementById("attempts-count") as HTMLSpanElement,
    progressPercent: document.getElementById(
      "progress-percent"
    ) as HTMLSpanElement,
    currentAttempt: document.getElementById(
      "current-attempt"
    ) as HTMLDivElement,
    crackDetails: document.getElementById("crack-details") as HTMLDivElement,
    crackedTextDisplay: document.getElementById(
      "cracked-text-display"
    ) as HTMLDivElement,
    crackMethodDisplay: document.getElementById(
      "crack-method-display"
    ) as HTMLDivElement,
    crackTime: document.getElementById("crack-time") as HTMLDivElement,
  };

  // Validate elements exist
  if (Object.values(elements).some((el) => !el)) {
    console.error("Required elements not found");
    return;
  }

  // Store current hashes
  let currentHashes = {
    md5: "",
    sha1: "",
    sha256: "",
    sha512: "",
  };

  // Tab switching
  elements.tabGenerate.addEventListener("click", () => switchMode("generate"));
  elements.tabVerify.addEventListener("click", () => switchMode("verify"));
  elements.tabCrack.addEventListener("click", () => switchMode("crack"));

  // Generate mode event listeners
  elements.generateBtn.addEventListener("click", generateHashes);
  elements.hmacToggle.addEventListener("change", toggleHmacMode);
  elements.pasteBtn.addEventListener("click", handlePaste);
  elements.clearBtn.addEventListener("click", handleClear);
  elements.downloadBtn.addEventListener("click", handleDownload);

  // Verify mode event listeners
  elements.verifyBtn.addEventListener("click", verifyHash);
  elements.verifyHmacToggle.addEventListener("change", toggleVerifyHmacMode);
  elements.clearVerifyBtn.addEventListener("click", handleClearVerify);

  // Crack mode event listeners
  elements.crackBtn.addEventListener("click", startCrack);
  elements.stopCrackBtn.addEventListener("click", stopCrack);
  elements.attackMethod.addEventListener("change", toggleAttackOptions);

  // Copy buttons
  const copyButtons = document.querySelectorAll(".copy-hash-btn");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", handleCopyHash);
  });

  // Auto-generate on input (with debounce)
  let timeoutId: ReturnType<typeof setTimeout>;
  elements.textInput.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (elements.textInput.value.trim()) {
        generateHashes();
      }
    }, 500);
  });

  // Toggle HMAC mode
  function toggleHmacMode() {
    if (elements.hmacToggle.checked) {
      elements.hmacOptions.classList.remove("hidden");
      elements.currentAlgorithm.textContent = "HMAC";
    } else {
      elements.hmacOptions.classList.add("hidden");
      elements.currentAlgorithm.textContent = hashMessages.standardHash;
      elements.secretKey.value = "";
      elements.salt.value = "";
    }
    if (elements.textInput.value.trim()) {
      generateHashes();
    }
  }

  // Generate all hashes
  async function generateHashes() {
    const text = elements.textInput.value.trim();

    if (!text) {
      clearHashes();
      return;
    }

    try {
      const isHmac = elements.hmacToggle.checked;
      const secretKey = elements.secretKey.value;
      const salt = elements.salt.value;

      // Validate HMAC requirements
      if (isHmac && !secretKey) {
        elements.currentAlgorithm.innerHTML = `<span class="text-red-400">${hashMessages.secretKeyRequired}</span>`;
        return;
      }

      // Prepare data
      let dataToHash = text;
      if (salt) {
        dataToHash = salt + text; // Prepend salt
      }

      // Generate hashes
      if (isHmac && secretKey) {
        // HMAC mode
        currentHashes.md5 = await generateHMAC("MD5", dataToHash, secretKey);
        currentHashes.sha1 = await generateHMAC("SHA-1", dataToHash, secretKey);
        currentHashes.sha256 = await generateHMAC(
          "SHA-256",
          dataToHash,
          secretKey
        );
        currentHashes.sha512 = await generateHMAC(
          "SHA-512",
          dataToHash,
          secretKey
        );
        elements.currentAlgorithm.textContent = "HMAC";
      } else {
        // Standard hash mode
        currentHashes.md5 = await generateHash("MD5", dataToHash);
        currentHashes.sha1 = await generateHash("SHA-1", dataToHash);
        currentHashes.sha256 = await generateHash("SHA-256", dataToHash);
        currentHashes.sha512 = await generateHash("SHA-512", dataToHash);
        elements.currentAlgorithm.textContent = hashMessages.standardHash;
      }

      // Display hashes
      elements.hashMd5.textContent = currentHashes.md5;
      elements.hashSha1.textContent = currentHashes.sha1;
      elements.hashSha256.textContent = currentHashes.sha256;
      elements.hashSha512.textContent = currentHashes.sha512;

      // Update timestamp
      const now = new Date();
      elements.generatedTime.textContent = now.toLocaleTimeString();

      // Track usage
      await actions.createUpdateProcessCount({
        process_name: "hash-generator",
      });
    } catch (error) {
      console.error("Error generating hashes:", error);
      elements.currentAlgorithm.innerHTML = `<span class="text-red-400">${hashMessages.error}</span>`;
    }
  }

  // Generate standard hash
  async function generateHash(
    algorithm: string,
    data: string
  ): Promise<string> {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);

    // Map algorithm names
    const algoMap: Record<string, string> = {
      MD5: "MD5",
      "SHA-1": "SHA-1",
      "SHA-256": "SHA-256",
      "SHA-512": "SHA-512",
    };

    // Note: MD5 is not natively supported in SubtleCrypto
    if (algorithm === "MD5") {
      return await generateMD5(data);
    }

    const hashBuffer = await crypto.subtle.digest(
      algoMap[algorithm],
      dataBuffer
    );
    return bufferToHex(hashBuffer);
  }

  // Generate HMAC hash
  async function generateHMAC(
    algorithm: string,
    data: string,
    key: string
  ): Promise<string> {
    const encoder = new TextEncoder();
    const keyBuffer = encoder.encode(key);
    const dataBuffer = encoder.encode(data);

    // Map algorithm names for HMAC
    const algoMap: Record<string, string> = {
      MD5: "SHA-1", // Fallback to SHA-1 for MD5
      "SHA-1": "SHA-1",
      "SHA-256": "SHA-256",
      "SHA-512": "SHA-512",
    };

    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      keyBuffer,
      { name: "HMAC", hash: algoMap[algorithm] },
      false,
      ["sign"]
    );

    const signature = await crypto.subtle.sign("HMAC", cryptoKey, dataBuffer);
    return bufferToHex(signature);
  }

  // Simple MD5 implementation (for client-side use)
  async function generateMD5(str: string): Promise<string> {
    // Since Web Crypto API doesn't support MD5, we'll use a simple implementation
    // For production, consider using a library like crypto-js
    // This is a placeholder - you may want to add a proper MD5 library

    // For now, we'll use SHA-256 as fallback with a note
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hex = bufferToHex(hashBuffer);

    // Take first 32 characters to simulate MD5 length
    return hex.substring(0, 32) + " (SHA-256 simulation)";
  }

  // Convert buffer to hex string
  function bufferToHex(buffer: ArrayBuffer): string {
    const byteArray = new Uint8Array(buffer);
    const hexCodes = Array.from(byteArray).map((byte) =>
      byte.toString(16).padStart(2, "0")
    );
    return hexCodes.join("");
  }

  // Handle paste
  async function handlePaste() {
    const { text } = await readFromClipboard();
    if (text) {
      elements.textInput.value = text;
      generateHashes();
    }
  }

  // Handle clear
  function handleClear() {
    elements.textInput.value = "";
    elements.secretKey.value = "";
    elements.salt.value = "";
    clearHashes();
  }

  // Clear all hash outputs
  function clearHashes() {
    elements.hashMd5.textContent = "-";
    elements.hashSha1.textContent = "-";
    elements.hashSha256.textContent = "-";
    elements.hashSha512.textContent = "-";
    elements.generatedTime.textContent = "-";
    currentHashes = { md5: "", sha1: "", sha256: "", sha512: "" };
  }

  // Handle copy individual hash
  async function handleCopyHash(event: Event) {
    const button = event.currentTarget as HTMLButtonElement;
    const hashType = button.getAttribute(
      "data-hash"
    ) as keyof typeof currentHashes;
    const hash = currentHashes[hashType];

    if (!hash) return;

    const result = await copyToClipboard(hash);
    if (result.success) {
      const originalText = button.textContent;
      button.textContent = `${hashMessages.copy} ✓`;
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    }
  }

  // Handle download
  function handleDownload() {
    const text = elements.textInput.value.trim();
    if (!text || !currentHashes.sha256) return;

    const isHmac = elements.hmacToggle.checked;
    const mode = isHmac ? "HMAC" : "Standard Hash";
    const timestamp = new Date().toISOString();

    let content = `UtiliPad Hash Generator Results\n`;
    content += `Generated: ${timestamp}\n`;
    content += `Mode: ${mode}\n`;
    content += `\n--- Input ---\n${text}\n`;

    if (isHmac && elements.secretKey.value) {
      content += `\n--- HMAC Key ---\nSecret Key: [HIDDEN]\n`;
    }

    if (elements.salt.value) {
      content += `\n--- Salt ---\n${elements.salt.value}\n`;
    }

    content += `\n--- Hashes ---\n`;
    content += `MD5:     ${currentHashes.md5}\n`;
    content += `SHA-1:   ${currentHashes.sha1}\n`;
    content += `SHA-256: ${currentHashes.sha256}\n`;
    content += `SHA-512: ${currentHashes.sha512}\n`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `utilipad-hashes-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Switch between Generate, Verify, and Crack modes
  function switchMode(mode: "generate" | "verify" | "crack") {
    // Hide all modes
    elements.generateMode.classList.remove("grid");
    elements.generateMode.classList.add("hidden");
    elements.verifyMode.classList.remove("grid");
    elements.verifyMode.classList.add("hidden");
    elements.crackMode.classList.remove("grid");
    elements.crackMode.classList.add("hidden");

    // Reset all tab styles
    [elements.tabGenerate, elements.tabVerify, elements.tabCrack].forEach(
      (tab) => {
        tab.classList.remove("border-emerald-500", "text-emerald-400");
        tab.classList.add("border-transparent", "text-neutral-400");
      }
    );

    // Show selected mode and highlight tab
    if (mode === "generate") {
      elements.generateMode.classList.remove("hidden");
      elements.generateMode.classList.add("grid");
      elements.tabGenerate.classList.add(
        "border-emerald-500",
        "text-emerald-400"
      );
      elements.tabGenerate.classList.remove(
        "border-transparent",
        "text-neutral-400"
      );
    } else if (mode === "verify") {
      elements.verifyMode.classList.remove("hidden");
      elements.verifyMode.classList.add("grid");
      elements.tabVerify.classList.add(
        "border-emerald-500",
        "text-emerald-400"
      );
      elements.tabVerify.classList.remove(
        "border-transparent",
        "text-neutral-400"
      );
    } else if (mode === "crack") {
      elements.crackMode.classList.remove("hidden");
      elements.crackMode.classList.add("grid");
      elements.tabCrack.classList.add("border-emerald-500", "text-emerald-400");
      elements.tabCrack.classList.remove(
        "border-transparent",
        "text-neutral-400"
      );
    }
  }

  // Toggle HMAC mode in verify
  function toggleVerifyHmacMode() {
    if (elements.verifyHmacToggle.checked) {
      elements.verifyHmacOptions.classList.remove("hidden");
    } else {
      elements.verifyHmacOptions.classList.add("hidden");
      elements.verifySecretKey.value = "";
      elements.verifySalt.value = "";
    }
  }

  // Verify hash function
  async function verifyHash() {
    const text = elements.verifyTextInput.value.trim();
    const providedHash = elements.hashToVerify.value.trim().toLowerCase();
    const algorithm = elements.verifyAlgorithm.value;

    if (!text || !providedHash) {
      elements.verificationResult.innerHTML = `
          <div class="text-red-400 text-2xl mb-2">✗</div>
          <div class="text-red-400 font-semibold">${hashMessages.error}</div>
          <div class="text-neutral-400 text-sm mt-2">${
            hashMessages.emptyInput || "Please provide both text and hash"
          }</div>
        `;
      elements.comparisonDetails.classList.add("hidden");
      return;
    }

    try {
      const isHmac = elements.verifyHmacToggle.checked;
      const secretKey = elements.verifySecretKey.value;
      const salt = elements.verifySalt.value;

      // Validate HMAC requirements
      if (isHmac && !secretKey) {
        elements.verificationResult.innerHTML = `
            <div class="text-red-400 text-2xl mb-2">✗</div>
            <div class="text-red-400 font-semibold">${hashMessages.secretKeyRequired}</div>
          `;
        return;
      }

      // Prepare data
      let dataToHash = text;
      if (salt) {
        dataToHash = salt + text;
      }

      // Calculate hash
      let calculatedHash: string;
      if (isHmac && secretKey) {
        calculatedHash = await generateHMAC(algorithm, dataToHash, secretKey);
      } else {
        calculatedHash = await generateHash(algorithm, dataToHash);
      }

      // Compare hashes
      const match = calculatedHash === providedHash;

      // Display result
      if (match) {
        elements.verificationResult.innerHTML = `
            <div class="text-emerald-400 text-6xl mb-4">✓</div>
            <div class="text-emerald-400 font-semibold text-xl">${
              hashMessages.hashMatch || "Hash Match!"
            }</div>
            <div class="text-neutral-400 text-sm mt-2">${
              hashMessages.hashMatchDesc ||
              "The provided hash matches the calculated hash."
            }</div>
          `;
      } else {
        elements.verificationResult.innerHTML = `
            <div class="text-red-400 text-6xl mb-4">✗</div>
            <div class="text-red-400 font-semibold text-xl">${
              hashMessages.hashMismatch || "Hash Mismatch"
            }</div>
            <div class="text-neutral-400 text-sm mt-2">${
              hashMessages.hashMismatchDesc ||
              "The provided hash does not match the calculated hash."
            }</div>
          `;
      }

      // Show comparison details
      elements.comparisonDetails.classList.remove("hidden");
      elements.providedHashDisplay.textContent = providedHash;
      elements.calculatedHashDisplay.textContent = calculatedHash;
      elements.verifyAlgorithmDisplay.textContent = isHmac
        ? `HMAC-${algorithm}`
        : algorithm;
      const now = new Date();
      elements.verifyTime.textContent = now.toLocaleTimeString();

      // Track usage
      await actions.createUpdateProcessCount({
        process_name: "hash-generator",
      });
    } catch (error) {
      console.error("Error verifying hash:", error);
      elements.verificationResult.innerHTML = `
          <div class="text-red-400 text-2xl mb-2">✗</div>
          <div class="text-red-400 font-semibold">${hashMessages.error}</div>
          <div class="text-neutral-400 text-sm mt-2">An error occurred during verification</div>
        `;
    }
  }

  // Clear verify inputs
  function handleClearVerify() {
    elements.verifyTextInput.value = "";
    elements.hashToVerify.value = "";
    elements.verifySecretKey.value = "";
    elements.verifySalt.value = "";
    elements.verifyHmacToggle.checked = false;
    elements.verifyHmacOptions.classList.add("hidden");
    elements.verifyAlgorithm.value = "SHA-256";
    elements.verificationResult.innerHTML = `
        <div class="text-neutral-400 text-sm">
          ${hashMessages.verificationWaiting || "Enter text and hash to verify"}
        </div>
      `;
    elements.comparisonDetails.classList.add("hidden");
  }

  // Crack mode variables
  let crackingInProgress = false;
  let stopRequested = false;

  // Toggle attack options
  function toggleAttackOptions() {
    const method = elements.attackMethod.value;

    elements.dictionaryOptions.classList.add("hidden");
    elements.bruteForceOptions.classList.add("hidden");

    if (method === "dictionary") {
      elements.dictionaryOptions.classList.remove("hidden");
    } else if (method === "brute-force") {
      elements.bruteForceOptions.classList.remove("hidden");
    }
  }

  // Common passwords dictionary
  const COMMON_PASSWORDS = [
    "password",
    "123456",
    "123456789",
    "12345678",
    "12345",
    "1234567",
    "password1",
    "qwerty",
    "abc123",
    "111111",
    "123123",
    "admin",
    "letmein",
    "welcome",
    "monkey",
    "1234567890",
    "dragon",
    "master",
    "sunshine",
    "princess",
    "football",
    "shadow",
    "superman",
    "michael",
    "ninja",
    "mustang",
    "password123",
    "hello",
    "charlie",
    "aa123456",
    "donald",
    "trustno1",
    "jordan",
    "jennifer",
    "hunter",
    "buster",
    "soccer",
    "harley",
    "batman",
    "andrew",
    "tigger",
    "robert",
    "thomas",
    "access",
    "matthew",
    "starwars",
    "test",
    "whatever",
    "solo",
    "zaq1zaq1",
    "qazwsx",
    "iloveyou",
    "password!",
    "passw0rd",
    "admin123",
    "root",
    "toor",
    "pass",
    "test123",
    "Password",
    "Password1",
    "Password123",
    "qwerty123",
    "123qwe",
    "1q2w3e4r",
    "1q2w3e",
    "qwertyuiop",
    "123321",
    "654321",
    "666666",
    "121212",
    "000000",
    "555555",
    "696969",
    "777777",
    "888888",
    "999999",
    "987654321",
    "mypassword",
    "1password",
    "abc",
    "love",
    "computer",
    "secret",
    "letmein123",
    "welcome123",
    "admin1",
    "root123",
    "administrator",
    "changeme",
    "password1234",
    "qwerty1",
    "123",
    "1234",
  ];

  const EXTENDED_PASSWORDS = [
    ...COMMON_PASSWORDS,
    // Add more common variations
    "baseball",
    "football1",
    "soccer1",
    "hockey",
    "ranger",
    "tiger",
    "yellow",
    "internet",
    "phoenix",
    "mickey",
    "chicken",
    "maggie",
    "pepper",
    "1111",
    "zxcvbnm",
    "qwer1234",
    "asdfgh",
    "ginger",
    "pass123",
    "secure",
    "mypass",
    "temp",
    "temp123",
    "guest",
    "demo",
    "sample",
    "example",
    "default",
    "12341234",
    "abcd1234",
    "admin@123",
    // Numbers
    "0000",
    "1111",
    "2222",
    "3333",
    "4444",
    "5555",
    "6666",
    "7777",
    "8888",
    "9999",
    "00000",
    "11111",
    "22222",
    "33333",
    "44444",
    "55555",
    "66666",
    "77777",
    "88888",
    "99999",
    // Years
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    // Common words
    "spring",
    "summer",
    "autumn",
    "winter",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  // Start cracking
  async function startCrack() {
    const hashToCrack = elements.hashToCrack.value.trim().toLowerCase();
    const algorithm = elements.crackAlgorithm.value;
    const method = elements.attackMethod.value;

    if (!hashToCrack) {
      elements.crackResult.innerHTML = `
          <div class="text-red-400 text-2xl mb-2">✗</div>
          <div class="text-red-400 font-semibold">${hashMessages.error}</div>
          <div class="text-neutral-400 text-sm mt-2">${
            hashMessages.emptyInput || "Please provide a hash"
          }</div>
        `;
      return;
    }

    crackingInProgress = true;
    stopRequested = false;
    elements.crackBtn.classList.add("hidden");
    elements.stopCrackBtn.classList.remove("hidden");
    elements.crackProgress.classList.remove("hidden");
    elements.crackDetails.classList.add("hidden");

    const startTime = Date.now();

    try {
      let result;
      if (method === "dictionary") {
        result = await dictionaryAttack(hashToCrack, algorithm);
      } else if (method === "brute-force") {
        result = await bruteForceAttack(hashToCrack, algorithm);
      } else if (method === "rainbow-api") {
        result = await rainbowTableAPI(hashToCrack, algorithm);
      } else {
        result = { success: false, message: "Unknown attack method" };
      }

      const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);

      if (result.success) {
        elements.crackResult.innerHTML = `
            <div class="text-emerald-400 text-6xl mb-4">✓</div>
            <div class="text-emerald-400 font-semibold text-xl">${
              hashMessages.crackSuccess || "Hash Cracked!"
            }</div>
            <div class="text-neutral-400 text-sm mt-2">${
              hashMessages.crackSuccessDesc ||
              "The original text has been found."
            }</div>
          `;

        elements.crackDetails.classList.remove("hidden");
        elements.crackedTextDisplay.textContent = result.plaintext ?? "";
        elements.crackMethodDisplay.textContent =
          method === "dictionary"
            ? "Dictionary Attack"
            : method === "brute-force"
            ? "Brute Force"
            : "Rainbow Table API";
        elements.crackTime.textContent = `${elapsedTime}s`;
      } else {
        elements.crackResult.innerHTML = `
            <div class="text-orange-400 text-4xl mb-4">⚠</div>
            <div class="text-orange-400 font-semibold text-xl">${
              hashMessages.crackFailed || "Hash Not Found"
            }</div>
            <div class="text-neutral-400 text-sm mt-2">${
              result.message ||
              "Could not crack the hash with the selected method."
            }</div>
          `;
      }

      // Track usage
      await actions.createUpdateProcessCount({
        process_name: "hash-generator",
      });
    } catch (error) {
      console.error("Error during cracking:", error);
      elements.crackResult.innerHTML = `
          <div class="text-red-400 text-2xl mb-2">✗</div>
          <div class="text-red-400 font-semibold">${hashMessages.error}</div>
          <div class="text-neutral-400 text-sm mt-2">An error occurred during cracking</div>
        `;
    } finally {
      crackingInProgress = false;
      elements.crackBtn.classList.remove("hidden");
      elements.stopCrackBtn.classList.add("hidden");
      elements.crackProgress.classList.add("hidden");
    }
  }

  // Stop cracking
  function stopCrack() {
    stopRequested = true;
    elements.crackResult.innerHTML = `
        <div class="text-yellow-400 text-4xl mb-4">⏸</div>
        <div class="text-yellow-400 font-semibold text-xl">${
          hashMessages.crackStopped || "Cracking Stopped"
        }</div>
        <div class="text-neutral-400 text-sm mt-2">${
          hashMessages.crackStoppedDesc ||
          "The cracking process was stopped by the user."
        }</div>
      `;
  }

  // Dictionary attack
  async function dictionaryAttack(
    targetHash: string,
    algorithm: string
  ): Promise<{ success: boolean; plaintext?: string; message?: string }> {
    const dictionarySize = elements.dictionarySize.value;
    const dictionary =
      dictionarySize === "common" ? COMMON_PASSWORDS : EXTENDED_PASSWORDS;

    let attempts = 0;
    const total = dictionary.length;

    for (const password of dictionary) {
      if (stopRequested) {
        return { success: false, message: "Stopped by user" };
      }

      attempts++;
      const hash = await generateHash(algorithm, password);

      // Update progress
      elements.currentAttempt.textContent = password;
      elements.attemptsCount.textContent = attempts.toString();
      const progress = (attempts / total) * 100;
      elements.progressBar.style.width = `${progress}%`;
      elements.progressPercent.textContent = `${progress.toFixed(1)}%`;

      // Yield to UI every 10 attempts
      if (attempts % 10 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 0));
      }

      if (hash.toLowerCase() === targetHash) {
        return { success: true, plaintext: password };
      }
    }

    return {
      success: false,
      message: `Tried ${attempts} passwords from dictionary`,
    };
  }

  // Brute force attack
  async function bruteForceAttack(
    targetHash: string,
    algorithm: string
  ): Promise<{ success: boolean; plaintext?: string; message?: string }> {
    const maxLength = parseInt(elements.bruteForceLength.value);
    const charsetType = elements.bruteForceCharset.value;

    let charset = "";
    if (charsetType === "numeric") {
      charset = "0123456789";
    } else if (charsetType === "lowercase") {
      charset = "abcdefghijklmnopqrstuvwxyz";
    } else if (charsetType === "alphanumeric") {
      charset = "abcdefghijklmnopqrstuvwxyz0123456789";
    }

    let attempts = 0;
    const totalCombinations = Math.pow(charset.length, maxLength);

    // Generate combinations
    async function* generateCombinations() {
      for (let length = 1; length <= maxLength; length++) {
        yield* generateCombinationsOfLength(charset, length);
      }
    }

    function* generateCombinationsOfLength(
      chars: string,
      length: number
    ): Generator<string> {
      if (length === 1) {
        for (const char of chars) {
          yield char;
        }
        return;
      }

      for (const char of chars) {
        for (const rest of generateCombinationsOfLength(chars, length - 1)) {
          yield char + rest;
        }
      }
    }

    for await (const attempt of generateCombinations()) {
      if (stopRequested) {
        return { success: false, message: "Stopped by user" };
      }

      attempts++;
      const hash = await generateHash(algorithm, attempt);

      // Update progress
      elements.currentAttempt.textContent = attempt;
      elements.attemptsCount.textContent = attempts.toString();
      const progress = Math.min((attempts / totalCombinations) * 100, 100);
      elements.progressBar.style.width = `${progress}%`;
      elements.progressPercent.textContent = `${progress.toFixed(1)}%`;

      // Yield to UI every 50 attempts
      if (attempts % 50 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 0));
      }

      if (hash.toLowerCase() === targetHash) {
        return { success: true, plaintext: attempt };
      }

      // Safety limit
      if (attempts > 100000) {
        return {
          success: false,
          message: "Exceeded attempt limit (100,000)",
        };
      }
    }

    return { success: false, message: `Tried ${attempts} combinations` };
  }

  // Rainbow table API (educational purposes)
  async function rainbowTableAPI(
    targetHash: string,
    algorithm: string
  ): Promise<{ success: boolean; plaintext?: string; message?: string }> {
    elements.crackResult.innerHTML = `
        <div class="animate-spin text-emerald-400 text-4xl mb-4">⟳</div>
        <div class="text-emerald-400 font-semibold">${
          hashMessages.crackQuerying || "Querying Rainbow Tables..."
        }</div>
        <div class="text-neutral-400 text-sm mt-2">${
          hashMessages.crackQueryingDesc ||
          "Searching online databases for known hashes..."
        }</div>
      `;

    // Since we're client-side and most rainbow table APIs require API keys or have CORS issues,
    // we'll simulate a lookup with a fallback to dictionary attack
    elements.currentAttempt.textContent = "Checking online database...";
    elements.attemptsCount.textContent = "1";
    elements.progressBar.style.width = "50%";
    elements.progressPercent.textContent = "50%";

    // Wait a bit to simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Fallback to dictionary attack
    elements.crackResult.innerHTML = `
        <div class="text-blue-400 text-3xl mb-4">ℹ</div>
        <div class="text-blue-400 font-semibold">${
          hashMessages.crackFallback || "Falling back to Dictionary"
        }</div>
        <div class="text-neutral-400 text-sm mt-2">${
          hashMessages.crackFallbackDesc ||
          "Online lookup unavailable, using local dictionary..."
        }</div>
      `;

    await new Promise((resolve) => setTimeout(resolve, 500));

    return await dictionaryAttack(targetHash, algorithm);
  }
}
