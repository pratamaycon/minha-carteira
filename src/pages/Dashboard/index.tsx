import React, { useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PiechartBox from '../../components/PiechartBox';
import HistoryBox from '../../components/HistoryBox';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listOfmonths from '../../utils/months'; 

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';


import { Container, Content } from './styles';

const DashBorad: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const date  = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    }, []);

    const months = useMemo(() => {
        return listOfmonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    }, []);

    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getUTCFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                } catch (error) {
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getUTCFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount)
                } catch (error) {
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalExpenses, totalGains]);

    const message = useMemo(() => {
        if (totalBalance < 0) {
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e corte o que for desnessário.",
                icon: sadImg
            }
        }
        if (totalBalance === 0) {
            return {
                title: "Ufaa!",
                description: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado.",
                icon: grinningImg
            }
        }
        else{
            return {
                title: "Muito bem!",
                description:"Sua Carteira está positiva!",
                footerText: "Continue assim.Considere investir o seu saldo.",
                icon:happyImg
            }
        }
    }, [totalBalance]);

    
    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;

        const percentGains = Number(((totalGains / total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));

        const data = [
            {
                name: "Entradas",
                value: totalGains,
                percent: percentGains ? percentGains : 0, 
                color: '#E44C4E'
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0, 
                color: '#F7931B'
            },
        ];

        return data;
    },[totalGains, totalExpenses]);
    
    const historyData = useMemo(() => {
        let limitDate: number;
        return listOfmonths.map((_, month) => {
            let amountEntry = 0;

            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();
                limitDate = gainMonth;

                if (gainMonth === month && gainYear === yearSelected) {
                    try {
                        amountEntry += Number(gain.amount);
                    } catch {
                        throw new Error('amountEntry is invalid. amountEntry must be number.')
                    }
                }
            });

            let amountOutPut = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();
                limitDate = limitDate < expenseMonth ? expenseMonth : limitDate;

                if (expenseMonth === month && expenseYear === yearSelected) {
                    try {
                        amountOutPut += Number(expense.amount);
                    } catch {
                        throw new Error('amountOutPut is invalid. amountOutPut must be number.')
                    }
                }
            });

            return {
                monthNumber: month,
                month: listOfmonths[month].substr(0, 3),
                amountEntry,
                amountOutPut,
                limitDate
            }
        })
        .filter(item => {
            const currentYear = new Date().getFullYear();

            return (yearSelected === currentYear && item.monthNumber <= limitDate)
                || (yearSelected < currentYear);
        });
    }, [yearSelected])

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch (error) {
            throw new Error('Invalid month value. Is accept 0 - 24.');
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch (error) {
            throw new Error('Invalid year value. Is integer numbers.');
        }
    }

    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
            <SelectInput 
                    options={months} 
                    onChange={(e) => handleMonthSelected(e.target.value)} 
                    defaultValue={monthSelected} />
                <SelectInput 
                    options={years}  
                    onChange={(e) => handleYearSelected(e.target.value)} 
                    defaultValue={yearSelected} />
            </ContentHeader>

            <Content>
                <WalletBox 
                    title="saldo"
                    color="#4E41F0"
                    amount={totalBalance}
                    footerLabel="atualizado com base nas entradas e saidas"
                    icon="dolar"
                />
                <WalletBox 
                    title="entradas"
                    color="#F7931B"
                    amount={totalGains}
                    footerLabel="atualizado com base nas entradas e saidas"
                    icon="arrowUp"
                />
                <WalletBox 
                    title="saídas"
                    color="#E44C4E"
                    amount={totalExpenses}
                    footerLabel="atualizado com base nas entradas e saidas"
                    icon="arrowDown"
                />
                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon} 
                />
                
                <PiechartBox data={relationExpensesVersusGains} />

                <HistoryBox 
                    data={historyData}
                    lineColorAmountEntry="#F7931B"
                    lineColorAmountOutPut="#E44C4E"
                />

            </Content>
        </Container>
    );
}

export default DashBorad;