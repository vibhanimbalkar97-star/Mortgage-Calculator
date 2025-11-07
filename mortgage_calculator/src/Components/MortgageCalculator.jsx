import React, { useState } from 'react'
import './MortgageCalculator.css'

const MortgageCalculator = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculateMortgageFormula = () => {
        const P = parseFloat(loanAmount);
        const rate = parseFloat(interestRate);
        const r = rate / 12 / 100;
        const term = parseInt(loanTerm);
        const n = term * 12;

        if (P <= 0 || rate <= 0 || n <= 0) {
            setMonthlyPayment("Invalid Inputs")
            return;
        }

        // Mortgage formula
        const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setMonthlyPayment(M.toFixed(2));
    }


    return (
        <div className='container'>
            {/* Implement Mortgage Calculator logic here */}
            <h1>Mortgage Calculator</h1>
            <div className='input'>
                <label htmlFor='loan'>Loan Amount (INR):
                    <input
                        type='number'
                        id='loan'
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                    />
                </label>
            </div>

            <div className='input'>
                <label htmlFor='rate'>Annual Interesr Rate (%):
                    <input
                        type='number'
                        id='rate'
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                    />
                </label>
            </div>
            <div className='input'>
                <label htmlFor='term'>Loan Term (years):
                    <input
                        type='number'
                        id='term'
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                    />
                </label>
            </div>
            <button className='button' onClick={calculateMortgageFormula}>Calculate</button>
            {
                monthlyPayment !== null && (
                    <div className='button'>
                        Monthly Payment: {monthlyPayment}
                    </div>
                )
            }
        </div>
    )
}

export default MortgageCalculator