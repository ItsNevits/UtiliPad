import { actions } from "astro:actions";
import { copyToClipboard, readFromClipboard } from "@/hooks/index";

// Define custom element globally
let cipherMessages = {} as any;

class AstroAESCipherTranslations extends HTMLElement {
  connectedCallback() {
    cipherMessages = JSON.parse(this.getAttribute("data-translations") || "{}");
    this.dispatchEvent(
      new CustomEvent("translations-ready", {
        bubbles: true,
        detail: cipherMessages,
      })
    );
  }
}

if (!customElements.get("astro-aes-cipher-translations")) {
  customElements.define(
    "astro-aes-cipher-translations",
    AstroAESCipherTranslations
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const translationElement = document.querySelector(
    "astro-aes-cipher-translations"
  );

  if (translationElement && Object.keys(cipherMessages).length === 0) {
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
    tabEncrypt: document.getElementById("tab-encrypt") as HTMLButtonElement,
    tabDecrypt: document.getElementById("tab-decrypt") as HTMLButtonElement,
    encryptMode: document.getElementById("encrypt-mode") as HTMLDivElement,
    decryptMode: document.getElementById("decrypt-mode") as HTMLDivElement,

    // Encrypt mode
    encryptInput: document.getElementById(
      "encrypt-input"
    ) as HTMLTextAreaElement,
    encryptPassword: document.getElementById(
      "encrypt-password"
    ) as HTMLInputElement,
    toggleEncryptPassword: document.getElementById(
      "toggle-encrypt-password"
    ) as HTMLButtonElement,
    generatePasswordBtn: document.getElementById(
      "generate-password-btn"
    ) as HTMLButtonElement,
    advancedOptionsToggle: document.getElementById(
      "advanced-options-toggle"
    ) as HTMLInputElement,
    advancedOptions: document.getElementById(
      "advanced-options"
    ) as HTMLDivElement,
    encryptionMode: document.getElementById(
      "encryption-mode"
    ) as HTMLSelectElement,
    passwordModeOptions: document.getElementById(
      "password-mode-options"
    ) as HTMLDivElement,
    manualModeOptions: document.getElementById(
      "manual-mode-options"
    ) as HTMLDivElement,
    cipherMode: document.getElementById("cipher-mode") as HTMLSelectElement,
    keyEncoding: document.getElementById("key-encoding") as HTMLSelectElement,
    keySize128: document.getElementById("key-size-128") as HTMLButtonElement,
    keySize192: document.getElementById("key-size-192") as HTMLButtonElement,
    keySize256: document.getElementById("key-size-256") as HTMLButtonElement,
    iterations: document.getElementById("iterations") as HTMLInputElement,
    manualKey: document.getElementById("manual-key") as HTMLInputElement,
    manualIV: document.getElementById("manual-iv") as HTMLInputElement,
    generateKeyBtn: document.getElementById(
      "generate-key-btn"
    ) as HTMLButtonElement,
    generateIVBtn: document.getElementById(
      "generate-iv-btn"
    ) as HTMLButtonElement,
    outputFormat: document.getElementById("output-format") as HTMLSelectElement,
    encryptBtn: document.getElementById("encrypt-btn") as HTMLButtonElement,
    encryptOutput: document.getElementById(
      "encrypt-output"
    ) as HTMLTextAreaElement,
    encryptTime: document.getElementById("encrypt-time") as HTMLDivElement,
    pasteEncryptBtn: document.getElementById(
      "paste-encrypt-btn"
    ) as HTMLButtonElement,
    clearEncryptBtn: document.getElementById(
      "clear-encrypt-btn"
    ) as HTMLButtonElement,
    copyEncryptedBtn: document.getElementById(
      "copy-encrypted-btn"
    ) as HTMLButtonElement,
    downloadEncryptedBtn: document.getElementById(
      "download-encrypted-btn"
    ) as HTMLButtonElement,

    // Decrypt mode
    decryptInput: document.getElementById(
      "decrypt-input"
    ) as HTMLTextAreaElement,
    decryptPassword: document.getElementById(
      "decrypt-password"
    ) as HTMLInputElement,
    toggleDecryptPassword: document.getElementById(
      "toggle-decrypt-password"
    ) as HTMLButtonElement,
    decryptAdvancedOptionsToggle: document.getElementById(
      "decrypt-advanced-options-toggle"
    ) as HTMLInputElement,
    decryptAdvancedOptions: document.getElementById(
      "decrypt-advanced-options"
    ) as HTMLDivElement,
    decryptionMode: document.getElementById(
      "decryption-mode"
    ) as HTMLSelectElement,
    decryptManualModeOptions: document.getElementById(
      "decrypt-manual-mode-options"
    ) as HTMLDivElement,
    decryptCipherMode: document.getElementById(
      "decrypt-cipher-mode"
    ) as HTMLSelectElement,
    decryptKeyEncoding: document.getElementById(
      "decrypt-key-encoding"
    ) as HTMLSelectElement,
    decryptKeySize128: document.getElementById(
      "decrypt-key-size-128"
    ) as HTMLButtonElement,
    decryptKeySize192: document.getElementById(
      "decrypt-key-size-192"
    ) as HTMLButtonElement,
    decryptKeySize256: document.getElementById(
      "decrypt-key-size-256"
    ) as HTMLButtonElement,
    decryptManualKey: document.getElementById(
      "decrypt-manual-key"
    ) as HTMLInputElement,
    decryptManualIV: document.getElementById(
      "decrypt-manual-iv"
    ) as HTMLInputElement,
    detectedFormat: document.getElementById(
      "detected-format"
    ) as HTMLDivElement,
    decryptBtn: document.getElementById("decrypt-btn") as HTMLButtonElement,
    decryptOutput: document.getElementById(
      "decrypt-output"
    ) as HTMLTextAreaElement,
    decryptTime: document.getElementById("decrypt-time") as HTMLDivElement,
    decryptStatus: document.getElementById("decrypt-status") as HTMLDivElement,
    decryptError: document.getElementById("decrypt-error") as HTMLDivElement,
    errorMessage: document.getElementById("error-message") as HTMLDivElement,
    pasteDecryptBtn: document.getElementById(
      "paste-decrypt-btn"
    ) as HTMLButtonElement,
    clearDecryptBtn: document.getElementById(
      "clear-decrypt-btn"
    ) as HTMLButtonElement,
    copyDecryptedBtn: document.getElementById(
      "copy-decrypted-btn"
    ) as HTMLButtonElement,
    downloadDecryptedBtn: document.getElementById(
      "download-decrypted-btn"
    ) as HTMLButtonElement,
  };

  // Validate elements exist
  if (Object.values(elements).some((el) => !el)) {
    console.error("Required elements not found");
    return;
  }

  // Tab switching
  elements.tabEncrypt.addEventListener("click", () => switchMode("encrypt"));
  elements.tabDecrypt.addEventListener("click", () => switchMode("decrypt"));

  // Encrypt mode event listeners
  elements.encryptBtn.addEventListener("click", encryptData);
  elements.generatePasswordBtn.addEventListener("click", generatePassword);
  elements.toggleEncryptPassword.addEventListener("click", () =>
    togglePasswordVisibility("encrypt")
  );
  elements.advancedOptionsToggle.addEventListener(
    "change",
    toggleAdvancedOptions
  );
  elements.encryptionMode.addEventListener("change", toggleEncryptionMode);
  elements.keySize128.addEventListener("click", () => selectKeySize(128));
  elements.keySize192.addEventListener("click", () => selectKeySize(192));
  elements.keySize256.addEventListener("click", () => selectKeySize(256));
  elements.generateKeyBtn.addEventListener("click", generateKey);
  elements.generateIVBtn.addEventListener("click", generateIV);
  elements.pasteEncryptBtn.addEventListener("click", () =>
    handlePaste("encrypt")
  );
  elements.clearEncryptBtn.addEventListener("click", () =>
    handleClear("encrypt")
  );
  elements.copyEncryptedBtn.addEventListener("click", () =>
    handleCopy("encrypted")
  );
  elements.downloadEncryptedBtn.addEventListener("click", () =>
    handleDownload("encrypted")
  );

  // Decrypt mode event listeners
  elements.decryptBtn.addEventListener("click", decryptData);
  elements.toggleDecryptPassword.addEventListener("click", () =>
    togglePasswordVisibility("decrypt")
  );
  elements.decryptAdvancedOptionsToggle.addEventListener(
    "change",
    toggleDecryptAdvancedOptions
  );
  elements.decryptionMode.addEventListener("change", toggleDecryptionMode);
  elements.decryptKeySize128.addEventListener("click", () =>
    selectDecryptKeySize(128)
  );
  elements.decryptKeySize192.addEventListener("click", () =>
    selectDecryptKeySize(192)
  );
  elements.decryptKeySize256.addEventListener("click", () =>
    selectDecryptKeySize(256)
  );
  elements.pasteDecryptBtn.addEventListener("click", () =>
    handlePaste("decrypt")
  );
  elements.clearDecryptBtn.addEventListener("click", () =>
    handleClear("decrypt")
  );
  elements.copyDecryptedBtn.addEventListener("click", () =>
    handleCopy("decrypted")
  );
  elements.downloadDecryptedBtn.addEventListener("click", () =>
    handleDownload("decrypted")
  );

  // Auto-detect format
  elements.decryptInput.addEventListener("input", detectFormat);

  // Switch between Encrypt and Decrypt modes
  function switchMode(mode: "encrypt" | "decrypt") {
    if (mode === "encrypt") {
      elements.encryptMode.classList.remove("hidden");
      elements.encryptMode.classList.add("grid");
      elements.decryptMode.classList.remove("grid");
      elements.decryptMode.classList.add("hidden");

      elements.tabEncrypt.classList.add(
        "border-emerald-500",
        "text-emerald-400"
      );
      elements.tabEncrypt.classList.remove(
        "border-transparent",
        "text-neutral-400"
      );
      elements.tabDecrypt.classList.remove(
        "border-emerald-500",
        "text-emerald-400"
      );
      elements.tabDecrypt.classList.add(
        "border-transparent",
        "text-neutral-400"
      );
    } else {
      elements.decryptMode.classList.remove("hidden");
      elements.decryptMode.classList.add("grid");
      elements.encryptMode.classList.remove("grid");
      elements.encryptMode.classList.add("hidden");

      elements.tabDecrypt.classList.add(
        "border-emerald-500",
        "text-emerald-400"
      );
      elements.tabDecrypt.classList.remove(
        "border-transparent",
        "text-neutral-400"
      );
      elements.tabEncrypt.classList.remove(
        "border-emerald-500",
        "text-emerald-400"
      );
      elements.tabEncrypt.classList.add(
        "border-transparent",
        "text-neutral-400"
      );
    }
  }

  // Toggle advanced options
  function toggleAdvancedOptions() {
    if (elements.advancedOptionsToggle.checked) {
      elements.advancedOptions.classList.remove("hidden");
    } else {
      elements.advancedOptions.classList.add("hidden");
    }
  }

  // Toggle decrypt advanced options
  function toggleDecryptAdvancedOptions() {
    if (elements.decryptAdvancedOptionsToggle.checked) {
      elements.decryptAdvancedOptions.classList.remove("hidden");
    } else {
      elements.decryptAdvancedOptions.classList.add("hidden");
    }
  }

  // Toggle encryption mode (password vs manual)
  function toggleEncryptionMode() {
    const mode = elements.encryptionMode.value;
    if (mode === "manual") {
      elements.passwordModeOptions.classList.add("hidden");
      elements.manualModeOptions.classList.remove("hidden");
    } else {
      elements.manualModeOptions.classList.add("hidden");
      elements.passwordModeOptions.classList.remove("hidden");
    }
  }

  // Toggle decryption mode (auto vs manual)
  function toggleDecryptionMode() {
    const mode = elements.decryptionMode.value;
    if (mode === "manual") {
      elements.decryptManualModeOptions.classList.remove("hidden");
    } else {
      elements.decryptManualModeOptions.classList.add("hidden");
    }
  }

  // State for selected key sizes (default: 256)
  let selectedKeySize = 256;
  let selectedDecryptKeySize = 256;

  // Select AES key size for encrypt
  function selectKeySize(size: number) {
    selectedKeySize = size;

    // Update button styles
    const buttons = [
      elements.keySize128,
      elements.keySize192,
      elements.keySize256,
    ];
    buttons.forEach((btn) => {
      btn.classList.remove("ring-2", "ring-emerald-500", "bg-emerald-500/10");
    });

    // Highlight selected button
    if (size === 128) {
      elements.keySize128.classList.add(
        "ring-2",
        "ring-emerald-500",
        "bg-emerald-500/10"
      );
    } else if (size === 192) {
      elements.keySize192.classList.add(
        "ring-2",
        "ring-emerald-500",
        "bg-emerald-500/10"
      );
    } else {
      elements.keySize256.classList.add(
        "ring-2",
        "ring-emerald-500",
        "bg-emerald-500/10"
      );
    }

    // Auto-generate new key with selected size
    generateKey();
  }

  // Select AES key size for decrypt (informative only, doesn't generate key)
  function selectDecryptKeySize(size: number) {
    selectedDecryptKeySize = size;

    // Update button styles
    const buttons = [
      elements.decryptKeySize128,
      elements.decryptKeySize192,
      elements.decryptKeySize256,
    ];
    buttons.forEach((btn) => {
      btn.classList.remove("ring-2", "ring-emerald-500", "bg-emerald-500/10");
    });

    // Highlight selected button
    if (size === 128) {
      elements.decryptKeySize128.classList.add(
        "ring-2",
        "ring-emerald-500",
        "bg-emerald-500/10"
      );
    } else if (size === 192) {
      elements.decryptKeySize192.classList.add(
        "ring-2",
        "ring-emerald-500",
        "bg-emerald-500/10"
      );
    } else {
      elements.decryptKeySize256.classList.add(
        "ring-2",
        "ring-emerald-500",
        "bg-emerald-500/10"
      );
    }
  }

  // Generate random AES key based on selected size
  function generateKey() {
    const keyBytes = new Uint8Array(selectedKeySize / 8);
    crypto.getRandomValues(keyBytes);
    const hexKey = Array.from(keyBytes)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    elements.manualKey.value = hexKey;
  }

  // Generate random IV for AES (16 bytes = 32 hex chars)
  function generateIV() {
    const ivBytes = new Uint8Array(16);
    crypto.getRandomValues(ivBytes);
    const hexIV = Array.from(ivBytes)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    elements.manualIV.value = hexIV;
  }

  // Generate random password
  function generatePassword() {
    const length = 32;
    const charset =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let password = "";
    const randomValues = new Uint8Array(length);
    crypto.getRandomValues(randomValues);

    for (let i = 0; i < length; i++) {
      password += charset[randomValues[i] % charset.length];
    }

    elements.encryptPassword.value = password;
  }

  // Toggle password visibility
  function togglePasswordVisibility(mode: "encrypt" | "decrypt") {
    const input =
      mode === "encrypt" ? elements.encryptPassword : elements.decryptPassword;
    const button =
      mode === "encrypt"
        ? elements.toggleEncryptPassword
        : elements.toggleDecryptPassword;

    if (input.type === "password") {
      input.type = "text";
      button.textContent = "🙈";
    } else {
      input.type = "password";
      button.textContent = "👀";
    }
  }

  // AES Encryption using Web Crypto API
  async function encryptData() {
    const plainText = elements.encryptInput.value.trim();
    const encryptionMode = elements.encryptionMode.value;

    if (!plainText) {
      alert(cipherMessages.emptyInput || "Please enter text to encrypt");
      return;
    }

    const startTime = Date.now();

    try {
      const format = elements.outputFormat.value as "base64" | "hex";
      let encrypted: string;

      if (encryptionMode === "manual") {
        // Manual mode: use provided key and IV
        const keyHex = elements.manualKey.value.trim();
        const ivHex = elements.manualIV.value.trim();

        if (!keyHex || keyHex.length === 0 || keyHex.length % 2 !== 0) {
          alert("Please provide a valid hex key (even number of characters)");
          return;
        }

        if (!ivHex || ivHex.length === 0 || ivHex.length % 2 !== 0) {
          alert("Please provide a valid hex IV (even number of characters)");
          return;
        }

        encrypted = await encryptManual(plainText, keyHex, ivHex);
      } else {
        // Password mode: derive key from password
        const password = elements.encryptPassword.value;

        if (!password) {
          alert(cipherMessages.emptyPassword || "Please enter a password");
          return;
        }

        const iterations = parseInt(elements.iterations.value);
        encrypted = await encrypt(plainText, password, iterations);
      }

      const output = format === "base64" ? encrypted : base64ToHex(encrypted);
      elements.encryptOutput.value = output;

      const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(3);
      elements.encryptTime.textContent = `${elapsedTime}s`;

      // Track usage
      await actions.createUpdateProcessCount({
        process_name: "aes-cipher",
      });
    } catch (error) {
      console.error("Encryption error:", error);
      alert(cipherMessages.encryptError || "Error encrypting data");
    }
  }

  // AES Decryption using Web Crypto API
  async function decryptData() {
    const cipherText = elements.decryptInput.value.trim();
    const decryptionMode = elements.decryptionMode.value;

    elements.decryptStatus.classList.add("hidden");
    elements.decryptError.classList.add("hidden");

    if (!cipherText) {
      showDecryptError(
        cipherMessages.emptyInput || "Please enter encrypted text"
      );
      return;
    }

    const startTime = Date.now();

    try {
      let decrypted: string;

      // Auto-detect format and convert if needed
      let base64Input = cipherText;
      if (isHex(cipherText)) {
        base64Input = hexToBase64(cipherText);
      }

      if (decryptionMode === "manual") {
        // Manual mode: use provided key and IV
        const keyHex = elements.decryptManualKey.value.trim();
        const ivHex = elements.decryptManualIV.value.trim();

        if (!keyHex || keyHex.length === 0 || keyHex.length % 2 !== 0) {
          showDecryptError(
            "Please provide a valid hex key (even number of characters)"
          );
          return;
        }

        if (!ivHex || ivHex.length === 0 || ivHex.length % 2 !== 0) {
          showDecryptError(
            "Please provide a valid hex IV (even number of characters)"
          );
          return;
        }

        decrypted = await decryptManual(base64Input, keyHex, ivHex);
      } else {
        // Auto mode: use password to derive key
        const password = elements.decryptPassword.value;

        if (!password) {
          showDecryptError(
            cipherMessages.emptyPassword || "Please enter a password"
          );
          return;
        }

        decrypted = await decrypt(base64Input, password);
      }

      elements.decryptOutput.value = decrypted;

      const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(3);
      elements.decryptTime.textContent = `${elapsedTime}s`;

      elements.decryptStatus.classList.remove("hidden");

      // Track usage
      await actions.createUpdateProcessCount({
        process_name: "aes-cipher",
      });
    } catch (error) {
      console.error("Decryption error:", error);
      const errorMsg =
        error instanceof Error
          ? error.message
          : "Invalid password or corrupted data";
      showDecryptError(errorMsg);
    }
  }

  // Show decryption error
  function showDecryptError(message: string) {
    elements.errorMessage.textContent = message;
    elements.decryptError.classList.remove("hidden");
  }

  // Encrypt function using AES-256-GCM
  async function encrypt(
    plainText: string,
    password: string,
    iterations: number
  ): Promise<string> {
    const enc = new TextEncoder();

    // Generate random salt and IV
    const salt = crypto.getRandomValues(new Uint8Array(16));
    const iv = crypto.getRandomValues(new Uint8Array(12));

    // Derive key from password
    const key = await deriveKey(password, salt, iterations);

    // Encrypt data
    const encrypted = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv: iv },
      key,
      enc.encode(plainText)
    );

    // Combine: iterations(4) + salt(16) + iv(12) + encrypted data
    const iterationsArray = new Uint8Array(4);
    new DataView(iterationsArray.buffer).setUint32(0, iterations, true);

    const combined = new Uint8Array(
      iterationsArray.length + salt.length + iv.length + encrypted.byteLength
    );
    combined.set(iterationsArray, 0);
    combined.set(salt, 4);
    combined.set(iv, 20);
    combined.set(new Uint8Array(encrypted), 32);

    return arrayBufferToBase64(combined);
  }

  // Decrypt function using AES-256-GCM
  async function decrypt(
    cipherText: string,
    password: string
  ): Promise<string> {
    const combined = base64ToArrayBuffer(cipherText);

    if (combined.length < 32) {
      throw new Error("Invalid encrypted data");
    }

    // Extract components
    const iterationsArray = combined.slice(0, 4);
    const iterations = new DataView(iterationsArray.buffer).getUint32(0, true);
    const salt = combined.slice(4, 20);
    const iv = combined.slice(20, 32);
    const data = combined.slice(32);

    // Derive key from password
    const key = await deriveKey(password, salt, iterations);

    // Decrypt data
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: iv },
      key,
      data
    );

    const dec = new TextDecoder();
    return dec.decode(decrypted);
  }

  // Manual encrypt function using provided key and IV
  async function encryptManual(
    plainText: string,
    keyStr: string,
    ivStr: string
  ): Promise<string> {
    const enc = new TextEncoder();
    const cipherMode = elements.cipherMode.value;
    const encoding = elements.keyEncoding.value;

    // Convert key/IV to bytes based on encoding
    let keyBytes: Uint8Array;
    let ivBytes: Uint8Array;

    if (encoding === "utf8") {
      // UTF-8 encoding (like .NET: Encoding.UTF8.GetBytes())
      keyBytes = enc.encode(keyStr);
      ivBytes = enc.encode(ivStr);
    } else {
      // Hexadecimal encoding
      keyBytes = hexToBytes(keyStr);
      ivBytes = hexToBytes(ivStr);
    }

    // Pad IV to required length for cipher mode (only if from hex)
    if (encoding === "hex") {
      ivBytes = padIV(ivBytes, cipherMode);
    }

    // Import the key with proper algorithm object
    const algorithm: AesKeyAlgorithm = {
      name: cipherMode,
      length: keyBytes.length * 8,
    };
    const key = await crypto.subtle.importKey(
      "raw",
      keyBytes as BufferSource,
      algorithm,
      false,
      ["encrypt"]
    );

    // Encrypt data
    const encryptParams =
      cipherMode === "AES-GCM"
        ? ({ name: cipherMode, iv: ivBytes as BufferSource } as AesGcmParams)
        : ({ name: cipherMode, iv: ivBytes as BufferSource } as AesCbcParams);

    const encrypted = await crypto.subtle.encrypt(
      encryptParams,
      key,
      enc.encode(plainText) as BufferSource
    );

    // Return only the encrypted data (no salt/iterations needed)
    return arrayBufferToBase64(encrypted);
  }

  // Manual decrypt function using provided key and IV
  async function decryptManual(
    cipherText: string,
    keyStr: string,
    ivStr: string
  ): Promise<string> {
    const enc = new TextEncoder();
    const cipherMode = elements.decryptCipherMode.value;
    const encoding = elements.decryptKeyEncoding.value;

    // Convert key/IV to bytes based on encoding
    let keyBytes: Uint8Array;
    let ivBytes: Uint8Array;

    if (encoding === "utf8") {
      // UTF-8 encoding (like .NET: Encoding.UTF8.GetBytes())
      keyBytes = enc.encode(keyStr);
      ivBytes = enc.encode(ivStr);
    } else {
      // Hexadecimal encoding
      keyBytes = hexToBytes(keyStr);
      ivBytes = hexToBytes(ivStr);
    }

    // Pad IV to required length for cipher mode (only if from hex)
    if (encoding === "hex") {
      ivBytes = padIV(ivBytes, cipherMode);
    }

    // Import the key with proper algorithm object
    const algorithm: AesKeyAlgorithm = {
      name: cipherMode,
      length: keyBytes.length * 8,
    };
    const key = await crypto.subtle.importKey(
      "raw",
      keyBytes as BufferSource,
      algorithm,
      false,
      ["decrypt"]
    );

    // Get the encrypted data
    const data = base64ToArrayBuffer(cipherText);

    // Decrypt data
    const decryptParams =
      cipherMode === "AES-GCM"
        ? ({ name: cipherMode, iv: ivBytes as BufferSource } as AesGcmParams)
        : ({ name: cipherMode, iv: ivBytes as BufferSource } as AesCbcParams);

    const decrypted = await crypto.subtle.decrypt(
      decryptParams,
      key,
      data as BufferSource
    );

    const dec = new TextDecoder();
    return dec.decode(decrypted);
  }

  // Helper: Convert hex string to bytes
  function hexToBytes(hex: string): Uint8Array {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
      bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return bytes;
  }

  // Helper: Pad IV to required length for cipher mode
  function padIV(iv: Uint8Array, cipherMode: string): Uint8Array {
    const requiredLength = cipherMode === "AES-CBC" ? 16 : 12; // CBC needs 16, GCM typically 12

    if (iv.length === requiredLength) {
      return iv;
    }

    const paddedIV = new Uint8Array(requiredLength);

    if (iv.length < requiredLength) {
      // If IV is shorter, duplicate it until it fills the required length
      // This is common when IV is 8 bytes and needs to be 16
      let offset = 0;
      while (offset < requiredLength) {
        const remaining = requiredLength - offset;
        const copyLength = Math.min(iv.length, remaining);
        paddedIV.set(iv.slice(0, copyLength), offset);
        offset += copyLength;
      }
    } else {
      // If IV is longer, truncate
      paddedIV.set(iv.slice(0, requiredLength));
    }

    return paddedIV;
  }

  // Derive key from password using PBKDF2
  async function deriveKey(
    password: string,
    salt: Uint8Array,
    iterations: number
  ): Promise<CryptoKey> {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      enc.encode(password),
      { name: "PBKDF2" },
      false,
      ["deriveBits", "deriveKey"]
    );

    return crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt: salt as BufferSource,
        iterations: iterations,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      true,
      ["encrypt", "decrypt"]
    );
  }

  // Helper: Convert ArrayBuffer to Base64
  function arrayBufferToBase64(buffer: ArrayBuffer | Uint8Array): string {
    const bytes =
      buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  // Helper: Convert Base64 to ArrayBuffer
  function base64ToArrayBuffer(base64: string): Uint8Array {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  // Helper: Convert Base64 to Hex
  function base64ToHex(base64: string): string {
    const bytes = base64ToArrayBuffer(base64);
    return Array.from(bytes)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  // Helper: Convert Hex to Base64
  function hexToBase64(hex: string): string {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
      bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
    }
    return arrayBufferToBase64(bytes);
  }

  // Helper: Check if string is hex
  function isHex(str: string): boolean {
    return /^[0-9a-fA-F]+$/.test(str) && str.length % 2 === 0;
  }

  // Detect input format
  function detectFormat() {
    const input = elements.decryptInput.value.trim();
    if (!input) {
      elements.detectedFormat.textContent =
        cipherMessages.autoDetect || "Auto-detect";
      return;
    }

    if (isHex(input)) {
      elements.detectedFormat.textContent = "Hexadecimal";
    } else {
      elements.detectedFormat.textContent = "Base64";
    }
  }

  // Handle paste
  async function handlePaste(mode: "encrypt" | "decrypt") {
    const { text } = await readFromClipboard();
    if (text) {
      if (mode === "encrypt") {
        elements.encryptInput.value = text;
      } else {
        elements.decryptInput.value = text;
        detectFormat();
      }
    }
  }

  // Handle clear
  function handleClear(mode: "encrypt" | "decrypt") {
    if (mode === "encrypt") {
      elements.encryptInput.value = "";
      elements.encryptPassword.value = "";
      elements.encryptOutput.value = "";
      elements.encryptTime.textContent = "-";
    } else {
      elements.decryptInput.value = "";
      elements.decryptPassword.value = "";
      elements.decryptOutput.value = "";
      elements.decryptTime.textContent = "-";
      elements.decryptStatus.classList.add("hidden");
      elements.decryptError.classList.add("hidden");
      elements.detectedFormat.textContent =
        cipherMessages.autoDetect || "Auto-detect";
    }
  }

  // Handle copy
  async function handleCopy(type: "encrypted" | "decrypted") {
    const text =
      type === "encrypted"
        ? elements.encryptOutput.value
        : elements.decryptOutput.value;

    if (!text) return;

    const result = await copyToClipboard(text);
    if (result.success) {
      const button =
        type === "encrypted"
          ? elements.copyEncryptedBtn
          : elements.copyDecryptedBtn;
      const originalText = button.textContent;
      button.textContent = `${cipherMessages.copy} ✓`;
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    }
  }

  // Handle download
  function handleDownload(type: "encrypted" | "decrypted") {
    const text =
      type === "encrypted"
        ? elements.encryptOutput.value
        : elements.decryptOutput.value;

    if (!text) return;

    const filename =
      type === "encrypted"
        ? `encrypted-${Date.now()}.txt`
        : `decrypted-${Date.now()}.txt`;

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
