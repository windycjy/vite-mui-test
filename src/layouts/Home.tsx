import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import GridItem from "../components/GridItem";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import FlexRow from "../components/FlexRow";
import ChangeAccountForm from "../components/ChangeAccountForm";
import { Plan } from "../types/user";

const Home = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const { isLoading, data: accountInfo } = useQuery<Plan>({
    queryKey: ["myPlan"],
    queryFn: () =>
      fetch("https://66cc36014290b1c4f19c5696.mockapi.io/my-plan/1").then(
        (res) => res.json()
      ),
  });

  return (
    <>
      <Box component={"section"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4">My Retirement</Typography>
        </Box>
        <Card variant="outlined" sx={{ p: 4 }}>
          <FlexRow
            sx={{
              m: 2,
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Manage</Typography>
            <Button variant="outlined" color="inherit">
              Enquire history
            </Button>
          </FlexRow>

          <Divider />

          <Box
            sx={{
              m: 2,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              rowGap: 2,
              columnGap: 8,
            }}
          >
            {isLoading
              ? Array.from({ length: 7 }, (_, k) => (
                  <Skeleton key={k} variant="rounded" height={30} />
                ))
              : accountInfo && (
                  <>
                    <GridItem
                      title="Creation date"
                      value={format(
                        new Date(accountInfo.createdAt),
                        "yyyy-MM-dd"
                      )}
                    />
                    <GridItem
                      title="Investment amount"
                      value={accountInfo.investmentAmount}
                      currency={accountInfo.currency}
                      subtext={"(per month)"}
                      action={
                        <Button color="inherit" variant="outlined">
                          Adjust amount
                        </Button>
                      }
                    />
                    <GridItem
                      title="Account number"
                      value={accountInfo.accountNumber}
                      action={
                        <IconButton
                          color="primary"
                          size="small"
                          onClick={() => setShowForm(true)}
                        >
                          <FontAwesomeIcon icon={faPen} color="primary" />
                        </IconButton>
                      }
                    />
                    <GridItem
                      title="Accumulated investment amount"
                      value={accountInfo.accmulatedAmount}
                      currency={accountInfo.currency}
                    />
                    <GridItem
                      title="Charge date"
                      value={`${format(
                        new Date(accountInfo.chargeDate),
                        "d"
                      )} of the month`}
                      subtext={`(Next payment date: ${format(
                        new Date(accountInfo.chargeDate),
                        "yyyy-MM-dd"
                      )})`}
                      action={
                        <IconButton color="primary" size="small">
                          <FontAwesomeIcon icon={faPen} color="primary" />
                        </IconButton>
                      }
                    />
                    <GridItem
                      title="Current market value"
                      value={accountInfo.currentValue}
                      currency={accountInfo.currency}
                      action={
                        <Button color="inherit" variant="outlined">
                          Redemption
                        </Button>
                      }
                    />
                    <GridItem
                      title="Status"
                      value={accountInfo.status}
                      action={
                        <Button color="inherit" variant="outlined">
                          Suspension of investment
                        </Button>
                      }
                    />
                  </>
                )}
          </Box>
        </Card>
        <FlexRow sx={{ my: 4, justifyContent: "center" }}>
          <Button variant="contained" color="success">
            Back to Home
          </Button>
        </FlexRow>
      </Box>
      {showForm && (
        <ChangeAccountForm
          currentAccount={accountInfo?.accountNumber}
          open={showForm}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
};

export default Home;
