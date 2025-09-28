export interface PasswordOptions {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  minNumbers: number;
  minSpecial: number;
}

export class PasswordGenerator {
  private readonly uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private readonly lowercase = "abcdefghijklmnopqrstuvwxyz";
  private readonly numbers = "0123456789";
  private readonly symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  generatePassword(options: PasswordOptions): string {
    const {
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
      minNumbers,
      minSpecial,
    } = options;

    let charset = "";
    let requiredChars = "";

    if (includeUppercase) charset += this.uppercase;
    if (includeLowercase) charset += this.lowercase;
    if (includeNumbers) {
      charset += this.numbers;
      // Agregar números mínimos requeridos
      for (let i = 0; i < minNumbers; i++) {
        requiredChars +=
          this.numbers[Math.floor(Math.random() * this.numbers.length)];
      }
    }
    if (includeSymbols) {
      charset += this.symbols;
      // Agregar símbolos mínimos requeridos
      for (let i = 0; i < minSpecial; i++) {
        requiredChars +=
          this.symbols[Math.floor(Math.random() * this.symbols.length)];
      }
    }

    if (charset === "") {
      throw new Error("Debe seleccionar al menos un tipo de carácter");
    }

    // Generar el resto de caracteres
    const remainingLength = length - requiredChars.length;
    let password = requiredChars;

    for (let i = 0; i < remainingLength; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }

    // Mezclar la contraseña para distribuir los caracteres requeridos
    return password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  }
}
