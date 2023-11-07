import { forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MUIDialog({
  setOpen,
  open,
  openForDelete = false,
  title,
  content,
  name,
  handleBtn,
  btnText,
}) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(false)}
      PaperProps={{
        style: {
          backgroundColor: "black",
          border: "1px solid gray",
        },
      }}
    >
      <DialogTitle>
        {openForDelete ? `DELETE ${name?.toUpperCase() || ""}?` : title}
      </DialogTitle>
      <DialogContent>
        <div>{content}</div>
      </DialogContent>
      <DialogActions>
        <button
          className="text-base font-semibold py-1 px-3"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
        <button
          className={openForDelete ? "bg-red-700" : "primary-button"}
          onClick={() => handleBtn()}
        >
          {btnText}
        </button>
      </DialogActions>
    </Dialog>
  );
}
