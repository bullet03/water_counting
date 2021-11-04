import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";

interface IProps {
  isModalOpen: boolean;
}

export const AddDrinkItemModal: React.FC<IProps> = ({ isModalOpen }) => {
  return (
    <Dialog open={isModalOpen}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>Some awesome text</DialogContentText>
        <FormControl>
          <InputLabel></InputLabel>
          <Select>
            <MenuItem></MenuItem>
          </Select>
        </FormControl>
        <TextField />
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
