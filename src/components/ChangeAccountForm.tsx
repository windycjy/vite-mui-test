import {
  Box,
  Button,
  Dialog,
  Divider,
  MenuItem,
  Select,
  Skeleton,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import FlexRow from "./FlexRow";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Account } from "../types/user";

interface IChangeAccountForm {
  open: boolean;
  onClose: () => void;
  currentAccount?: string;
}

const ChangeAccountForm: FC<IChangeAccountForm> = ({
  open,
  onClose,
  currentAccount,
}) => {
  const [selectedAccount, setSelectedAccount] = useState(currentAccount);

  const { isLoading, data: accountList = [] } = useQuery<Account[]>({
    queryKey: ["accountList"],
    queryFn: () =>
      fetch("https://66cc36014290b1c4f19c5696.mockapi.io/accounts/").then(
        (res) => res.json()
      ),
  });
  const {
    isPending: isSaving,
    isSuccess: isSaved,
    mutate: onSave,
  } = useMutation({
    mutationFn: () => {
      return new Promise((resolve) => setTimeout(() => resolve(1), 1000));
    },
  });

  useEffect(() => {
    if (isSaved) {
      console.info("account saved: ", selectedAccount);
      onClose();
    }
  }, [isSaved]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box m={4} sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ m: 2 }}>
          <Typography variant="h6">Change account number:</Typography>
        </Box>

        <Divider />

        <Box
          sx={{
            m: 2,
          }}
        >
          <Typography>Please select your debit account number:</Typography>

          <FlexRow sx={{ gap: 1 }}>
            <Select variant="outlined" value="TWD" disabled>
              <MenuItem value="TWD">TWD</MenuItem>
            </Select>
            {isLoading ? (
              <Skeleton variant="rounded" width={155} height={56} />
            ) : (
              <Select
                variant="outlined"
                value={selectedAccount}
                onChange={(event) => setSelectedAccount(event.target.value)}
              >
                {accountList.map((item) => (
                  <MenuItem key={item.id.toString()} value={item.accountNumber}>
                    {item.accountNumber}
                  </MenuItem>
                ))}
              </Select>
            )}
          </FlexRow>
        </Box>
        <FlexRow sx={{ justifyContent: "center", gap: 1 }}>
          <Button
            color="inherit"
            variant="contained"
            disabled={isSaving}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            color="success"
            variant="contained"
            disabled={isSaving}
            onClick={() => {
              selectedAccount && onSave();
            }}
          >
            Determind
          </Button>
        </FlexRow>
      </Box>
    </Dialog>
  );
};

export default ChangeAccountForm;
