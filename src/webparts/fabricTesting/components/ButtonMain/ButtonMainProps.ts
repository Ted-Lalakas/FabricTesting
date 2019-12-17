export interface ButtonMainProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
  teds?: number;
  buttonIsPressed?: boolean;
  func(): void;
}