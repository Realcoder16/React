import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { saveProfile } from "./action";
import { Link } from "react-router-dom";

const Profile = ({ dispatch, mapIn, token }) => {
  // не совсем ясно, откуда приходит token, точнее, понятно, что он получается во время авторизации, но как он приходит сюда, через props? и какую роль играет токен?
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSave = () => {
    dispatch(saveProfile({ cardName, cardNumber, expireDate, cvc, token }));
  }; // token здесь мне не нужен, у меня авторизует все mapIn. mapIn поступает в state в статусе true при успешном сохранении и ответе от сервера, происходит   put(mapToStateProfile())

  return (
    <>
      {mapIn ? (
        <p>
          Вы успешно заполнили данные карты и можете приступить к выбору
          маршрута <Link to="/map">Go to Map</Link>
        </p>
      ) : (
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
                        value={expireDate}
                        onChange={(event) => setExpireDate(event.target.value)}
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
      )}
    </>
  );
};

export default connect((state) => ({
  mapIn: state.profileReducer.mapIn,
  token: state.profileReducer.token,
}))(Profile);
