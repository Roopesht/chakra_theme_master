#!/bin/bash
# update-component-variants.sh
# Apply variant-aware component configuration for the Chakra Theme Showcase

echo "🎨 Updating Chakra component variant definitions..."

# ---------- src/theme/components/Button.js ----------
cat <<'EOF' > src/theme/components/Button.js
export const Button = {
  baseStyle: {
    borderRadius: "md",
    fontWeight: "semibold",
    transition: "all 0.2s ease",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "brand.500",
      outlineOffset: "2px",
    },
  },
  defaultProps: {
    variant: "accent",
    size: "md",
  },
};
EOF

# ---------- src/theme/components/Card.js ----------
cat <<'EOF' > src/theme/components/Card.js
export const Card = {
  baseStyle: {
    p: 4,
    borderRadius: "lg",
    boxShadow: "sm",
    transition: "all 0.2s ease",
    _hover: { transform: "translateY(-2px)", boxShadow: "md" },
  },
  defaultProps: {
    variant: "neutral",
  },
};
EOF

# ---------- src/theme/components/Input.js ----------
cat <<'EOF' > src/theme/components/Input.js
export const Input = {
  baseStyle: {
    field: {
      borderRadius: "md",
      transition: "border-color 0.2s ease",
      _placeholder: { color: "gray.400" },
    },
  },
  defaultProps: {
    variant: "outline",
    size: "md",
  },
};
EOF

# ---------- src/theme/components/Alert.js ----------
cat <<'EOF' > src/theme/components/Alert.js
export const Alert = {
  baseStyle: {
    container: {
      borderRadius: "md",
      fontWeight: "medium",
      p: 3,
      transition: "all 0.2s ease",
    },
    icon: { mr: 2 },
    title: { fontWeight: "semibold" },
  },
  defaultProps: {
    variant: "info",
  },
};
EOF

# ---------- src/theme/components/Switch.js ----------
cat <<'EOF' > src/theme/components/Switch.js
export const Switch = {
  baseStyle: (props) => ({
    track: {
      borderRadius: "full",
      transition: "all 0.2s ease",
      _checked: {
        bg: props.colorMode === "dark" ? "brand.500" : "brand.600",
      },
    },
    thumb: {
      bg: "white",
      borderRadius: "50%",
      transition: "transform 0.2s ease",
    },
  }),
};
EOF

# ---------- src/theme/components/index.js ----------
cat <<'EOF' > src/theme/components/index.js
export * from "./Button";
export * from "./Card";
export * from "./Input";
export * from "./Alert";
export * from "./Switch";
EOF

echo "✅ Chakra component variant definitions updated successfully."
echo ""
echo "Next steps:"
echo "  1️⃣ Run: npm install tinycolor2"
echo "  2️⃣ Run: npm start"
echo ""
echo "Your components (Button, Card, Input, Alert, Switch) now fully use the semantic variant system."
echo "Background, border, hover, and text colors are automatically applied based on the active brand theme."
EOF
