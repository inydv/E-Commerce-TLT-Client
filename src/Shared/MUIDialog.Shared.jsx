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
  title,
  content,
  handleBtn = null,
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
          minWidth: "300px",
        },
      }}
    >
      <DialogTitle className="flex items-center justify-between gap-10">
        <span>{title}</span>
        <span
          className="p-1 cursor-pointer font-semibold"
          onClick={() => setOpen(false)}
        >
          x
        </span>
      </DialogTitle>
      <hr className="border-gray-400" />
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        {handleBtn && (
          <button
            className="bg-red-600 font-semibold text-base py-2 px-4 cursor-pointer"
            onClick={() => {
              setOpen(false);
              handleBtn();
            }}
          >
            Delete
          </button>
        )}
      </DialogActions>
    </Dialog>
  );
}
