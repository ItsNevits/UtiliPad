---
title: AES Cipher - Military-Grade Encryption Tool
author: Development Team
date: 2025-10-22
tags: ["AES", "Encryption", "Security", "Cryptography", "Privacy"]
draft: false
---

# AES Cipher

A professional-grade encryption tool featuring dual-mode operation: **Password-based encryption** with PBKDF2 key derivation, and **Manual Key/IV mode** for direct cryptographic control. Supports both **AES-GCM** (authenticated) and **AES-CBC** (classic) modes with flexible key sizes (128/192/256-bit). Compatible with .NET and other platforms. All processing happens locally in your browser - your data and passwords never leave your device.

## Key Features

### Encryption Modes
- **Password Mode (PBKDF2)** → Secure password-based encryption with automatic key derivation
- **Manual Key & IV Mode** → Direct control with hexadecimal or UTF-8 encoded keys
- **AES-GCM** → Authenticated encryption with built-in integrity verification
- **AES-CBC** → Classic mode compatible with most systems and .NET applications

### Key Sizes & Flexibility
- **AES-128** → 16-byte keys (fast, secure for most uses)
- **AES-192** → 24-byte keys (balanced security)
- **AES-256** → 32-byte keys (maximum security, NSA TOP SECRET approved)
- **Hexadecimal Encoding** → Standard format for keys and IVs
- **UTF-8 Encoding** → .NET `Encoding.UTF8.GetBytes()` compatible mode

### Security Features
- **100% Client-Side** → All encryption happens in your browser
- **No Server Communication** → Your data never leaves your device
- **Web Crypto API** → Native browser cryptography
- **Configurable Iterations** → Adjust security vs. speed (10K-1M iterations)
- **Strong Password Generation** → Built-in secure password generator
- **Format Support** → Base64 and Hexadecimal output formats

## Functionality

- Real-time encryption and decryption
- Automatic format detection (Base64/Hex)
- Password visibility toggle
- Secure random password generator (32 characters)
- Advanced options for PBKDF2 iterations
- Output format selection (Base64/Hex)
- Copy to clipboard functionality
- Download encrypted/decrypted files
- Paste from clipboard support
- Execution time tracking
- Visual success/error feedback

## How to Use

### Encrypt Mode

#### Password-Based Encryption (Default)
1. Switch to the "Encrypt" tab (default)
2. Enter or paste your plain text in the input area
3. Enter a strong password (or click "Generate" for a secure random password)
4. Click "Encrypt"
5. Copy the encrypted output or download it as a file

**Important**: Save your password securely! Without it, you cannot decrypt your data.

#### Manual Key & IV Encryption (Advanced)
1. Enter your plain text
2. Click "Advanced Options"
3. Select **"Manual Key & IV"** as encryption mode
4. Select cipher algorithm:
   - **AES-GCM**: Authenticated encryption (recommended)
   - **AES-CBC**: Classic mode (.NET compatible)
5. Select encoding:
   - **Hexadecimal**: Standard format
   - **UTF-8 String**: For .NET `Encoding.UTF8.GetBytes()` compatibility
6. Select key size: AES-128, AES-192, or AES-256
7. Enter your key and IV (or click "Generate" for each)
8. Click "Encrypt"
9. **Save the key, IV, and encrypted text separately**

#### Advanced Options
- **PBKDF2 Iterations** (Password mode):
   - **100,000** (default): Good balance of security and speed
   - **500,000**: Higher security, slower
   - **1,000,000**: Maximum security, slowest
- **Output Format**:
   - **Base64**: Compact, standard format
   - **Hexadecimal**: Longer but readable

### Decrypt Mode

#### Password-Based Decryption
1. Switch to the "Decrypt" tab
2. Paste your encrypted text
3. The format will be auto-detected (Base64 or Hex)
4. Enter the same password used for encryption
5. Click "Decrypt"
6. View the decrypted text with visual confirmation (green checkmark)

#### Manual Key & IV Decryption
1. Switch to the "Decrypt" tab
2. Paste your encrypted text
3. Click "Advanced Options"
4. Select **"Manual Key & IV"** as decryption mode
5. Select the **same cipher algorithm** used for encryption (AES-GCM or AES-CBC)
6. Select the **same encoding** used for encryption (Hex or UTF-8)
7. Select the **same key size** used for encryption
8. Enter the **exact same key and IV** used for encryption
9. Click "Decrypt"
10. View the decrypted text

#### .NET Compatibility Mode
For decrypting data encrypted with .NET `Encoding.UTF8.GetBytes()`:
1. Select **"UTF-8 String (.NET style)"** as encoding
2. Select **"AES-CBC"** as cipher algorithm
3. Enter the key and IV strings (not hex)
4. The key length determines AES variant automatically

#### Troubleshooting Decryption
If decryption fails:
- ✗ **Wrong password/key**: Verify exact password or key/IV values
- ✗ **Corrupted data**: Ensure the encrypted text is complete and unmodified
- ✗ **Format mismatch**: Verify Base64 or Hexadecimal format
- ✗ **Cipher mode mismatch**: Must use same mode (GCM/CBC) as encryption
- ✗ **Encoding mismatch**: Hex vs UTF-8 must match encryption
- ✗ **Key size mismatch**: AES-128/192/256 must match encryption

## Use Cases

- **Secure Communication**: Encrypt messages before sending via email or chat
- **Password Storage**: Encrypt sensitive passwords and keys
- **Data Protection**: Protect confidential documents and notes
- **File Encryption**: Encrypt text files before cloud storage
- **Secure Backups**: Create encrypted backups of important data
- **Cross-Platform Integration**: Decrypt data from .NET, Java, Python applications
- **API Security**: Encrypt/decrypt data for secure API communication
- **Development**: Encrypt configuration files and secrets
- **Compliance**: Meet data protection regulations (GDPR, HIPAA)
- **Legacy Systems**: Compatible with AES-CBC implementations
- **Testing**: Test encryption implementations across platforms

## Technical Specifications

### Encryption Process
1. **Password → Key Derivation**: PBKDF2-SHA256 with random 16-byte salt
2. **Random IV Generation**: 12-byte initialization vector for GCM mode
3. **AES-256-GCM Encryption**: Authenticated encryption of plaintext
4. **Output Packaging**: Iterations(4) + Salt(16) + IV(12) + Ciphertext
5. **Encoding**: Base64 or Hexadecimal encoding for storage/transmission

### Decryption Process
1. **Input Parsing**: Extract iterations, salt, IV, and ciphertext
2. **Key Re-derivation**: PBKDF2 with same salt and iterations
3. **AES-256-GCM Decryption**: Authenticated decryption with IV
4. **Verification**: GCM authentication tag validates integrity
5. **Output**: Original plaintext

### Security Notes
- **AES-256** is approved by NSA for TOP SECRET information
- **GCM mode** provides authenticated encryption (AEAD)
- **PBKDF2** with 100,000+ iterations resists brute-force attacks
- **Random salt** prevents pre-computed rainbow table attacks
- **Random IV** ensures unique ciphertext for identical plaintext
- **Web Crypto API** uses hardware acceleration when available

### Performance
- **Encryption**: Typically 5-50ms depending on iterations and text length
- **Decryption**: Similar to encryption time
- **Iterations impact**: 100K iterations ≈ 10-20ms, 1M iterations ≈ 100-200ms
- **Browser optimized**: Uses SubtleCrypto for native performance

## Best Practices

1. **Password Strength**: Use at least 16 characters with mixed case, numbers, and symbols
2. **Password Storage**: Use a password manager or secure storage
3. **Backup**: Save encrypted text and password separately
4. **Iterations**: Use 100,000+ for general use, 500,000+ for sensitive data
5. **Format**: Base64 for storage, either format works for transmission
6. **Testing**: Test decryption immediately after encryption
7. **Never**: Share passwords via the same channel as encrypted data

## Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (all recent versions)
- **Web Crypto API**: Required (available in all modern browsers)
- **Mobile**: Fully functional on iOS and Android browsers
- **Cross-Platform**: Encrypt on one device, decrypt on another
- **Standards-Based**: Uses IETF and NIST approved algorithms

---

**Security Guarantee**: All cryptographic operations use the browser's native Web Crypto API, which implements industry-standard algorithms. No custom crypto implementations are used.

**Privacy Guarantee**: Zero data transmission - everything happens locally. Your plaintext, ciphertext, and passwords never leave your browser.
