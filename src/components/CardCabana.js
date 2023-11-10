import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { format, addMonths } from 'date-fns';
import 'react-date-range/dist/styles.css'; // Estilos padrão
import 'react-date-range/dist/theme/default.css'; // Tema padrão
import { ptBR } from 'date-fns/locale';
import '../css/Reserva.css';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CheckIcon from '@mui/icons-material/Check';

const CardCabana = ({ cabanaName, apiURL }) => {
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
            color: "#56bf39",
        },
    ]);
    const [selectedDates, setSelectedDates] = useState({
        entrada: null,
        saida: null,
    });
    const [datasBloqueadas, setDatasBloqueadas] = useState([]);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const makeAPICall = async () => {
        try {
          const response = await fetch('http://localhost:8080/', {mode:'cors'});
          const data = await response.json();
          console.log({ data })
        }
        catch (e) {
          console.log(e)
        }
      }
    useEffect(() => {
        fetch(apiURL)
            .then((response) => response.json())
            .then((data) => {
                const apiDatesString = data.dates || '';
                const apiDatesArray = apiDatesString
                    .split(',')
                    .map(date => date.trim().replace(/'/g, ''));
                const blockedDates = apiDatesArray.map(dateString => new Date(dateString));
                setDatasBloqueadas(blockedDates);
            });
    }, [apiURL]);

    const handleDateChange = (ranges) => {
        setDateRange([ranges.selection]);

        // Adicione estas linhas para atualizar o estado das datas selecionadas
        setSelectedDates({
            entrada: ranges.selection.startDate,
            saida: ranges.selection.endDate,
        });
    };

    const handleAdultsChange = (event) => {
        setAdults(parseInt(event.target.value, 10));
    };

    const handleChildrenChange = (event) => {
        setChildren(parseInt(event.target.value, 10));
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const formattedStartDate = format(dateRange[0].startDate, 'dd/MM/yyyy');
    const formattedEndDate = format(dateRange[0].endDate, 'dd/MM/yyyy');
    const formattedDateRange = `Check-in: ${formattedStartDate} %0A Check-out: ${formattedEndDate}`;
    const maxDate = addMonths(new Date(), 18);
    return (
        <div className="card-cabana">
            <div className="rounded-card">
                <h3 className='cabana-tittle'>{cabanaName}</h3>
                <div className='calendar-and-days'>
                    <button className='show-calendar' onClick={() => setShowCalendar(!showCalendar)}>
                        <CalendarMonthOutlinedIcon />{showCalendar}
                    </button>
                    {showCalendar && (
                        <DateRangePicker
                            className="custom-date-range-picker"
                            ranges={dateRange}
                            onChange={handleDateChange}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            disabledDates={datasBloqueadas}
                            locale={ptBR}
                            minDate={new Date()}
                            maxDate={maxDate}
                        />
                    )}
                    <div className="selected-dates">
                        {selectedDates.entrada && (
                            <p>Entrada: {format(selectedDates.entrada, 'dd/MM/yyyy')}</p>
                        )}
                        {selectedDates.saida && (
                            <p>Saída: {format(selectedDates.saida, 'dd/MM/yyyy')}</p>
                        )}
                    </div>
                </div>
                <div className='input-form'>
                    <div className='adults-form'>
                        <label htmlFor={`adults-${cabanaName}`}>Adultos:</label>
                        <input
                            type="number"
                            min={1}
                            max={3}
                            className='input-adults'
                            id={`adults-${cabanaName}`}
                            value={adults}
                            onChange={handleAdultsChange}
                        />
                    </div>
                    <div className='children-form'>
                        <label htmlFor={`children-${cabanaName}`}>Crianças:</label>
                        <input
                            type="number"
                            min={1}
                            max={3}
                            className='input-children'
                            id={`children-${cabanaName}`}
                            value={children}
                            onChange={handleChildrenChange}
                        />
                    </div>
                </div>

                <div className='payment-form'>
                    <label htmlFor={`payment-${cabanaName}`}>Forma de Pagamento:</label>
                    <select
                        id={`payment-${cabanaName}`}
                        value={paymentMethod}
                        onChange={handlePaymentMethodChange}
                    >
                        <option value="" selected disabled>Selecione...</option>
                        <option value="pix">PIX</option>
                        <option value="dinheiro">Dinheiro</option>
                        <option value="cartao">Cartão</option>
                    </select>
                </div>
                <a
                    href={`https://api.whatsapp.com/send?phone=5551995023834&text=Olá, quero fazer uma reserva!%0A Para as datas:%0A${formattedDateRange}*.%0A*Nº de adultos:* ${adults}%0A*Nº de crianças:* ${children}%0A*Forma de Pagamento:* ${paymentMethod}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='btn-whats'
                >
                    <button type="button"><CheckIcon sx={{color: '#25D366'}}/></button>
                </a>
            </div>
        </div>
    );
};

export default CardCabana;
