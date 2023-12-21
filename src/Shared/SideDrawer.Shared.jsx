// MUI
import Drawer from "@mui/material/Drawer";

// SIDE DRAWER
export default function SideDrawer({ isDrawerOpen, setIsDrawerOpen, content }) {
  // JSX ELEMENT
  return (
    <Drawer
      anchor={"left"}
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      PaperProps={{
        sx: {
          backgroundColor: "black",
          width: "250px",
          padding: "20px",
          boxShadow: "0px 8px 10px -5px rgb(255 255 255 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgba(0,0,0,0.12)",
        },
      }}
    >
      <div className="flex items-center justify-between gap-5 mb-10">
        <h1 className="font-semibold text-4xl w-fit line-through">
          T<span className="text-red-600">L</span>T
        </h1>
        <h1
          className="font-semibold p-1 cursor-pointer"
          onClick={() => setIsDrawerOpen(false)}
        >
          X
        </h1>
      </div>
      {content}
    </Drawer>
  );
}
