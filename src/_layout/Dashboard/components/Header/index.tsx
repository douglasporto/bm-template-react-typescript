import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../../../hooks/auth';

import {
  Container,
  UseNotifications,
  NotificationsList,
  NotificationItem,
  NotificationEmpty,
  UseProfile,
} from './styles';

import * as S from './styles';

import notfound from '../../../../assets/not-found.svg';

interface IHeaderProps {
  title: string;
}

interface INotification {
  id: string;
  content: string;
  createdAt: string;
  read: boolean;
  hourFormatted: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  const notificationsRef = useRef<HTMLDivElement>(null);

  const { user, signOut } = useAuth();

  const [isOpenNotifications, setIsOpenNotifications] = useState(false);
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const handleToggleNotifications = useCallback(() => {
    setIsOpenNotifications(!isOpenNotifications);
  }, [isOpenNotifications, setIsOpenNotifications]);

  return (
    <Container>
      <div>
        <h1>{title}</h1>

        <UseNotifications
          ref={notificationsRef}
          hasNotifications={notifications.length > 0}
        >
          <button type="button" onClick={handleToggleNotifications}>
            <S.IconBell />
          </button>

          <span />

          {isOpenNotifications && (
            <>
              {notifications.length > 0 ? (
                <NotificationsList>
                  {notifications.map((notification) => (
                    <NotificationItem onClick={() => {}}>
                      <p>{notification.content}</p>
                      <div>
                        <span>{notification.hourFormatted}</span>

                        {!notification.read && <div />}
                      </div>
                    </NotificationItem>
                  ))}
                </NotificationsList>
              ) : (
                <NotificationEmpty>
                  <img src={notfound} alt="Not Found" />
                  <strong>Não encontramos nada...</strong>
                  <span>
                    Não encontramos nenhuma notificação que não tenha sido
                    marcada como lida.
                  </span>
                </NotificationEmpty>
              )}
            </>
          )}
        </UseNotifications>
      </div>
      <UseProfile>
        <div>
          <strong>Douglas Porto</strong>
          <button type="button" onClick={signOut}>
            Sair do sistema
            <FiLogOut color="#c53030" size={15} />
          </button>
        </div>

        <Link to="/dashboard/profile">
          <img
            src="https://douglasporto.com.br/static/13981318170e312741f475d1b525a8fd/79638/profile.jpg"
            alt="Douglas Porto"
          />
        </Link>
      </UseProfile>
    </Container>
  );
};

export default Header;
