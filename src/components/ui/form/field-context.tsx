import { createContext } from "react";
const FieldContext = createContext({ error: "", errorId: "", controlId: "" });
export default FieldContext;