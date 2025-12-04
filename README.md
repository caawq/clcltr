# clcltr

[![GitHub Repo stars](https://img.shields.io/github/stars/caawq/clcltr)](https://github.com/caawq/clcltr)
[![GitHub forks](https://img.shields.io/github/forks/caawq/clcltr)](https://github.com/caawq/clcltr)
[![GitHub issues](https://img.shields.io/github/issues/caawq/clcltr)](https://github.com/caawq/clcltr/issues)
[![GitHub license](https://img.shields.io/github/license/caawq/clcltr)](https://github.com/caawq/clcltr/blob/main/LICENSE)

## Overview

**clcltr** is a lightweight, command-line calculator tool designed for quick and efficient mathematical computations directly from your terminal. Built with simplicity in mind, it supports basic arithmetic operations, advanced functions like trigonometry and logarithms, and even custom scripting for complex calculations. Whether you're a developer automating scripts, a student solving equations, or just someone who hates GUI bloat, clcltr has you covered.

The name "clcltr" stands for **C**ommand-**L**ine **C**alcu**L**a**T**o**R** – because who has time for vowels?

This project is in early development, so expect rapid iterations and contributions welcome!

## Features

- **Basic Operations**: Addition, subtraction, multiplication, division, exponents, and roots.
- **Advanced Math**: Trigonometric functions (sin, cos, tan), logarithms, factorials, and more.
- **Variables & Scripting**: Define variables and write simple scripts for reusable calculations.
- **Unit Conversions**: Built-in support for common units (length, weight, temperature, etc.).
- **History & Logging**: Track your calculations and export them to files.
- **Cross-Platform**: Works on Linux, macOS, and Windows (via WSL or native builds).
- **Extensible**: Plugin system for custom functions.

## Installation

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Quick Install
Clone the repository and install dependencies:

```bash
git clone https://github.com/caawq/clcltr.git
cd clcltr
pip install -r requirements.txt
```

### From Source
If you prefer to run directly:

```bash
python setup.py install
```

Or simply run the main script:
```bash
python clcltr.py
```

## Usage

Launch clcltr in interactive mode:

```bash
clcltr
```

You'll enter an interactive shell. Example session:

```
clcltr> 2 + 2 * 3
8
clcltr> sin(30) * pi / 180
0.5
clcltr> let x = 5; x^2 + 3*x
40
clcltr> convert 100 f to c
37.77777777777778
clcltr> history
# Shows last 10 calculations
clcltr> exit
```

For non-interactive use (one-liners):

```bash
clcltr "sqrt(144) + log(1000)"
```

### Command-Line Flags
- `-h, --help`: Show help message.
- `-f FILE`: Execute calculations from a script file.
- `-o OUTPUT`: Log output to a file.
- `--version`: Display version info.

## File Structure

```
clcltr/
├── clcltr.py          # Main entry point and CLI parser
├── core/
│   ├── calculator.py  # Core math engine
│   └── parser.py      # Expression parser (using sympy)
├── scripts/           # Example calculation scripts
├── tests/             # Unit tests
├── requirements.txt   # Python dependencies
├── setup.py           # Installation script
└── README.md          # You're reading it!
```

## Examples

### Basic Arithmetic
```python
clcltr> (10 + 5) / 3
5
```

### Trigonometry
```python
clcltr> cos(radians(60))
0.5
```

### Unit Conversion
```python
clcltr> convert 5 km to miles
3.106855961186311
```

### Scripting
Create a file `area.py`:
```
let r = 10;
pi * r^2
```
Run: `clcltr -f area.py` → Outputs `314.1592653589793`

## Contributing

We love pull requests! To get started:

1. Fork the repo and create a feature branch (`git checkout -b feature/amazing-feature`).
2. Commit your changes (`git commit -m 'Add amazing feature'`).
3. Push to the branch (`git push origin feature/amazing-feature`).
4. Open a Pull Request.

Please ensure tests pass: `python -m pytest tests/`

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [SymPy](https://www.sympy.org/) for symbolic math.
- Inspired by tools like `bc` and `Python's eval()` – but better!

## Support

If you encounter issues, please file an issue on GitHub. For questions, reach out via the issues tracker or email the maintainer.

---

*Built with ❤️ by caawq. Last updated: December 2025*
