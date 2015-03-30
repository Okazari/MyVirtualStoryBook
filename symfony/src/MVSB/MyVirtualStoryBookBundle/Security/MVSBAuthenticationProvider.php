<?php

namespace MVSB\MyVirtualStoryBookBundle\Security;

use Symfony\Component\Security\Core\Authentication\Provider\AuthenticationProviderInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\NonceExpiredException;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;

class MVSBAuthenticationProvider implements AuthenticationProviderInterface
{
    private $userProvider;

    public function __construct($userProvider)
    {
        $this->userProvider = $userProvider;
    }

    public function authenticate(TokenInterface $token)
    {
        try{
            $user = $this->userProvider->loadUserByUsername($token->getUsername());
        } catch(UsernameNotFoundException $e){
            return $token;
        }

        if ($user && $user->getPassword() === $token->getUser()->getPassword()) {
            $token->setAuthenticated(true);
            $token->setUser($user);
            return $token;
        }

        return $token;
    }


    public function supports(TokenInterface $token)
    {
        return $token instanceof MVSBToken;
    }
    
}