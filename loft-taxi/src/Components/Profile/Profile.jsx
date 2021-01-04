import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { saveProfile, getProfile } from "../../action";

const Profile = ({ dispatch, token, profile }) => {
  const [cardName, setCardName] = useState(profile.cardName);
  const [cardNumber, setCardNumber] = useState(profile.cardNumber);
  const [expiryDate, setExpiryDate] = useState(profile.expiryDate);
  const [cvc, setCvc] = useState(profile.cvc);

  useEffect(() => {
    dispatch(getProfile(token));
  }, []);

  useEffect(() => {
    setCardName(profile.cardName);
    setCardNumber(profile.cardNumber);
    setExpiryDate(profile.expiryDate);
    setCvc(profile.cvc);
  }, []);

  const handleSave = () => {
    dispatch(saveProfile({ cardName, cardNumber, expiryDate, cvc, token }));
  };
  return (
    <>
      <div className="profile__wrapper">
        <Paper className="profile__paper" elevation={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} align="center">
              <Typography
                className="profile__caption"
                variant="h4"
                gutterBottom
              >
                Профиль
              </Typography>
              <p>Введите платежные данные</p>
            </Grid>
            <Grid container spacing={12} item xs={6}>
              <TextField
                fullWidth
                label="Имя владельца"
                value={cardName}
                onChange={(event) => setCardName(event.target.value)}
              />
              <TextField
                fullWidth
                label="Номер карты"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
              />

              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="MM/YY"
                    value={expiryDate}
                    onChange={(event) => setExpiryDate(event.target.value)}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="CVC"
                    value={cvc}
                    onChange={(event) => setCvc(event.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} align="center">
              <Button
                className="profile__button"
                variant="contained"
                color="primary"
                size="large"
                onClick={handleSave}
              >
                <Typography variant="button" display="block">
                  Сохранить
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
};

export default connect((state) => ({
  profile: state.profile,
  token: state.auth.token,
}))(Profile);
