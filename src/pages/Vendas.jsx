/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Header } from '../components/Header'
import { api } from '../services/api';

export default function Vendas() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const currentTime = new Date();
  const hourNow = currentTime.getHours();

  const weekDayInNumber = today.getDay();
  let currentWeekDay = '';
  if(weekDayInNumber === 0) currentWeekDay = 'Domingo'
  else if(weekDayInNumber === 1) currentWeekDay = 'Segunda'
  else if(weekDayInNumber === 2) currentWeekDay = 'Terça'
  else if(weekDayInNumber === 3) currentWeekDay = 'Quarta'
  else if(weekDayInNumber === 4) currentWeekDay = 'Quinta'
  else if(weekDayInNumber === 5) currentWeekDay = 'Sexta'
  else if(weekDayInNumber === 6) currentWeekDay = 'Sábado'

  const [loja, setLoja] = useState(0);
  const [weekDay, setWeekDay] = useState(currentWeekDay);
  const [date, setDate] = useState(today.toLocaleDateString());
  const [hour, setHour] = useState(hourNow);
  const [salesPerHour, setSalesPerHour] = useState(0);
  const [pa, setPA] = useState(0);
  const [tm, setTM] = useState(0);
  const [wap, setWap] = useState(0);
  const [foundation, setFoundation] = useState(0);
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get('/sales').then(({ data }) => {
      setSales(data.data);
    })
  }, [sales])

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      await api.post('/sales', { loja, weekDay, date, hour, salesPerHour, pa, tm, wap, foundation });
      setLoja(0);
      setWeekDay(currentWeekDay.toUpperCase());
      setDate(today.toLocaleDateString());
      setHour(hourNow);
      setSalesPerHour(0);
      setPA(0);
      setTM(0);
      setWap(0);
      setFoundation(0);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }


  return (
    <div>
      <Head>
        <title>Vendas</title>
      </Head>

      <Header />
      <main>
        <div className="max-w-7xl flex">
          {/* Replace with your content */}
          <div className="w-screen h-full flex">
            <aside className="w-48 h-full flex flex-col maxLg:hidden">
              <h1 className="max-w-[10rem] text-6xl font-bold text-gray-800 mx-auto">BRA KPIs</h1>
              <p className="mt-5 pb-5 border-b border-gray-400 max-w-[10rem] text-xl text-gray-500">OU INDICADORES DE PERFOMANCE</p>
              <div className="flex flex-col mt-5 pb-5 border-b border-gray-400">
                <div className="text-3xl text-gray-700 mx-auto">FUNDAÇÃO</div>
                <p className="mx-auto text-4xl">1:3</p>
              </div>
              <div className="mt-5 pb-5 border-b border-gray-400 flex items-end">
                <p className="max-w-[5rem] text-3xl text-gray-700">MULTI'S <strong className="text-bold">META</strong></p>
                <p className="text-4xl">3,00</p>
              </div>
              <div className="flex flex-col mt-5 pb-5 border-b border-gray-400">
                <div className="text-3xl text-gray-700 mx-auto">WAP</div>
                <p className="mx-auto text-4xl">1:10</p>
              </div>
              <div className="mt-5 pb-5 border-b border-gray-400 flex items-end">
                <p className="max-w-[5rem] text-3xl text-gray-700">SUPERAR <strong className="text-bold">COMPS</strong></p>
                <p className="text-4xl">LY</p>
              </div>
            </aside>

            <div className="lg:w-screen flex flex-col gap-5 ml-40 mt-5 maxLg:ml-0">
              <p className="text-3xl">ACOMPANHAMENTO DIÁRIO</p>
              <form className="w-full max-w-lg border-gray-800 border p-4 rounded-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="loja">
                      Loja
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-1 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="loja"
                        value={loja}
                        // value={loja}
                        onChange={(e) => setLoja(e.target.value)}
                      >
                        <option selected value={0}>loja</option>
                        <option value={1}>Ig Campinas</option>
                        <option value={2}>Palladium</option>
                        <option value={3}>Shop Curitiba</option>
                        <option value={4}>Sj Rio Preto</option>
                        <option value={5}>Jockey Club</option>
                        <option value={6}>Dom Pedro</option>
                        <option value={7}>JK Iguatemi</option>
                        <option value={8}>Catarina</option>
                        <option value={9}>São Caetano</option>
                        <option value={10}>Ribeirão Preto</option>
                        <option value={11}>Jundiai</option>
                        <option value={12}>Estação Curitiba</option>
                        <option value={13}>Morumbi</option>
                        <option value={14}>Sorocaba</option>
                        <option value={15}>Ig Porto Alegre</option>
                        <option value={16}>Mocca</option>
                        <option value={17}>SB Plaza</option>
                        <option value={18}>Kids Galleria</option>
                        <option value={19}>Praia de Belas</option>
                        <option value={20}>Center Vale</option>
                        <option value={21}>Catuaí Londrina</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>

                  </div>
                  <div className="w-full md:w-1/4 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dia-da-semana">
                      Dia da Semana
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="dia-da-semana"
                      type="text"
                      placeholder="Sextou"
                      value={weekDay}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="data">
                      Data
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="data"
                      type="text"
                      placeholder={today.toLocaleDateString()}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="hora">
                      Hora
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 text-center leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="hora"
                      type="text"
                      value={hour < 10 ? `0${hour}:00` : `${hour}:00`}
                      onChange={(e) => setHour(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="venda-hora">
                      Venda da hora
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="venda-hora"
                      type="number"
                      value={salesPerHour}
                      onChange={(e) => setSalesPerHour(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="p-a">
                      P.A
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="p-a"
                      type="number"
                      value={pa}
                      onChange={(e) => setPA(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="tm">
                      TM
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="tm"
                      type="number"
                      value={tm}
                      onChange={(e) => setTM(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="wap">
                      WAP
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="wap"
                      type="number"
                      value={wap}
                      onChange={(e) => setWap(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fundacao">
                      FUNDAÇÃO
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="fundacao"
                      type="number"
                      value={foundation}
                      onChange={(e) => setFoundation(e.target.value)}
                    />
                  </div>
                </div>
                {/* <button type="submit" className=" bg-green-400 hover:bg-green-500 duration-200 ">Enviar</button> */}
                <button className="p-3 mt-3 rounded-lg w-full bg-green-400 hover:bg-green-600" type="submit" mt={6} isLoading={isLoading}>Enviar</button>
              </form>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}