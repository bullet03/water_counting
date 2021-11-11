import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { StyledDialogContent } from "./styles";

interface IProps {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const AddDrinkItemModal: React.FC<IProps> = ({
  isModalOpen,
  toggleModal,
}) => {
  return (
    <Dialog open={isModalOpen}>
      <DialogTitle>Subscribe</DialogTitle>
      <StyledDialogContent>
        <DialogContentText>Add drinking</DialogContentText>
        <FormControl>
          <InputLabel></InputLabel>
          <Select>
            <MenuItem>coffee</MenuItem>
            <MenuItem>tea</MenuItem>
            <MenuItem>water</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <TextField sx={{ width: "50%" }} />
          <InputLabel>ml</InputLabel>
        </Box>
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={toggleModal}>Decline</Button>
        <Button>Accept</Button>
      </DialogActions>
    </Dialog>
  );
};
