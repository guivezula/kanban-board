import { CardMode } from "../Card.types";

export interface ActionNavProps {
  mode: CardMode;
  onCreate?: () => void;
  onSave?: () => void;
  onRemove?: () => void;
  onCancel?: () => void;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
}

export const ActionNavIconByType = {
  create: [{ name: "AiFillPlusCircle", action: "onCreate" }],
  edit: [
    { name: "AiOutlineStop", action: "onCancel" },
    { name: "AiFillSave", action: "onSave" },
  ],
  view: [
    { name: "AiFillLeftCircle", action: "onNavigatePrev" },
    { name: "AiFillDelete", action: "onRemove" },
    { name: "AiFillRightCircle", action: "onNavigateNext" },
  ],
};
