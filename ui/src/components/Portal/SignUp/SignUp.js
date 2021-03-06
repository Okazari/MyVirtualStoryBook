import React from 'react'
import styles from '../common/style.scss'
import { Input, Button } from '../../common'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../common/Box'
import { AdviceLink } from '../../Portal/common'
import { AuthService, RouteService } from '../../../services'

const subscribe = (event) => {
  event.preventDefault()
  const credentials = {
    username: event.target.username.value,
    password: event.target.password.value,
    email: event.target.email.value,
    verifyPassword: event.target.verifyPassword.value,
  }
  AuthService.subscribe(credentials)
    .then(response => response.json())
    .then(({ token }) => {
      AuthService.setToken(token)
      RouteService.goTo(RouteService.routes.home())
    })
}

const SignUp = () => {
  return (
    <div className={styles.component}>
      <Box>
        <BoxHeader withBorder className={styles.header}>
          <h3 className="box-title">Inscription</h3>
        </BoxHeader>
        <BoxBody>
          <form onSubmit={subscribe}>
            <Input
              label="Nom d'utilisateur"
              domProps={{
                placeholder: 'Okazari',
                type: 'text',
                name: 'username',
              }}
            />
            <Input
              label="Adresse mail"
              domProps={{
                placeholder: 'myvirtualstorybook@gmail.com',
                type: 'email',
                name: 'email',
              }}
            />
            <Input
              label="Mot de passe"
              domProps={{
                placeholder: 'thisisasecret',
                type: 'password',
                name: 'password',
              }}
            />
            <Input
              label="Mot de passe (vérification)"
              domProps={{
                placeholder: 'thisisasecret',
                type: 'password',
                name: 'verifyPassword',
              }}
            />
            <Button className={styles.button}>
              INSCRIPTION
            </Button>
          </form>
        </BoxBody>
        <BoxFooter>
          <AdviceLink
            advice="Déjà inscris ?"
            label="Connecte toi !"
            link={RouteService.routes.oldsignin()}
          />
          <AdviceLink
            advice="Nom d'utilisateur/Mot de passe oublié ?"
            label="Aidez moi !"
            link={RouteService.routes.recover()}
          />
        </BoxFooter>
      </Box>
    </div>
  )
}

export default SignUp
