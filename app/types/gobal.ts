export interface ICatImage {
  id: string;
  url: string;
  width: string;
  height: string;
}
export interface IFormEmail {
  label: string;
  filledName: "name" | "email" | "message";
  type: string;
  placeholder: string;
  typeInput: "input" | "textarea";
}
