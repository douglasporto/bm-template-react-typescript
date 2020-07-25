import React, { useState } from 'react';
import { FiHeart, FiUsers, FiClipboard } from 'react-icons/fi';
import { endOfMonth, startOfMonth } from 'date-fns';
import * as S from './styles';
// import logoImg from '../../assets/logo-pm.png';
import Header from '../../_layout/Dashboard/components/Header';
import Card from '../../components/Card';
import { Color } from '../../styles/variables';
import LineChart from './sections/LineChart';

const Dashboard: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState<Date[]>([
    new Date(),
    new Date(),
  ]);
  const handleNewDate = (date: Date) => {
    setStartDate(date);
    const endMonth = endOfMonth(date);
    const startMonth = startOfMonth(date);
    setSelectedDays([startMonth, endMonth]);
  };

  const ExampleCustomInput = ({ value: any, onClick: any }) => (
    <button type="button" className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );

  return (
    <>
      <Header title="Estatísticas" />
      <S.CardGroup style={{ marginBottom: 30 }}>
        <Card
          title="Atingimento da meta no último mês"
          icon={FiHeart}
          color={Color.errors}
          description="80 projetos fechados"
          percentage="+ 100%"
          isUp
        />

        <Card
          title="Propostas enviadas"
          icon={FiUsers}
          color={Color.themeColor}
          description="8 Propostas enviadas até o momento"
          percentage="10%"
          isUp
        />

        <Card
          title="Propostas concretizadas"
          icon={FiClipboard}
          color={Color.success}
          description="40 projetos fechados este mês"
          percentage="+ 50%"
          isUp
        />
      </S.CardGroup>
      <S.CardGroup>
        <Card>
          <header>
            <h3>Crescimento do Prime</h3>
            <S.DatePickerContainer
              selected={startDate}
              onChange={handleNewDate}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              customInput={<ExampleCustomInput />}
            />
          </header>
          <LineChart selectedDays={selectedDays} />
        </Card>
      </S.CardGroup>
    </>
  );
};

export default Dashboard;
