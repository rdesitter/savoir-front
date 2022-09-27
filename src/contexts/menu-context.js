import { createContext } from 'react';

export const menus = {
  home: [
    { index: 0, url: '#recherche', label: 'Rechercher une annonce' },
    { index: 1, url: '#proposition', label: 'Voir les annonces de propositions' },
    { index: 2, url: '#besoin', label: 'Voir les annonces de besoin' },
  ],
  search: [
    { index: 0, url: '#contenu', label: 'Aller au contenu principal' },
  ],
  myAccount: [
    { index: 0, url: '#profil', label: 'Aller au profil public' },
    { index: 1, url: '#annonces', label: 'Aller à mes annonces' },
    { index: 2, url: '#infos', label: 'Aller aux informations personnelles' },
  ],
  connexion: [
    { index: 0, url: '#contenu', label: 'Aller au contenu principal' },
  ],
  default: [
    { index: 0, url: '#contenu', label: 'Aller au contenu principal' },
  ],
};

export const MenuContext = createContext(
  menus.home, // default value
);
