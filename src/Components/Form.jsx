import React, { useState } from "react";
import styles from "./Styles/Form.module.css"; // Import CSS module

function LoanCalculator() {
    const [loanDetails, setLoanDetails] = useState({
        loanAmount: "",
        loanTermYears: "",
        loanTermMonths: "",
        interestRate: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoanDetails({
            ...loanDetails,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add calculation logic
        console.log("Loan Details:", loanDetails);
    };

    return (
        <div className={styles.calculatorContainer}>
            <form onSubmit={handleSubmit} className={styles.formSection}>
                <div className={styles.formGroup}>
                    <label htmlFor="loanAmount">Loan amount</label>
                    <input
                        type="number"
                        id="loanAmount"
                        name="loanAmount"
                        value={loanDetails.loanAmount}
                        onChange={handleChange}
                        placeholder="$5,000"
                        required
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="loanTermYears">Loan term in years</label>
                    <input
                        type="number"
                        id="loanTermYears"
                        name="loanTermYears"
                        value={loanDetails.loanTermYears}
                        onChange={handleChange}
                        placeholder="5"
                        required
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="loanTermMonths">Or Loan term in months</label>
                    <input
                        type="number"
                        id="loanTermMonths"
                        name="loanTermMonths"
                        value={loanDetails.loanTermMonths}
                        onChange={handleChange}
                        placeholder="60"
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="interestRate">Interest rate per year</label>
                    <input
                        type="number"
                        id="interestRate"
                        name="interestRate"
                        value={loanDetails.interestRate}
                        onChange={handleChange}
                        placeholder="4.5"
                        step="0.01"
                        required
                        className={styles.inputField}
                    />
                </div>
                <button type="submit" className={styles.calculateButton}>
                    Calculate
                </button>
            </form>
            <div className={styles.resultsSection}>
                <h2>Monthly payments</h2>
                <p className={styles.monthlyPayment}>$93.22</p>
                <div className={styles.resultsDetails}>
                    <p>Total principal paid: $5,000</p>
                    <p>Total interest paid: $592.91</p>
                </div>
                <div className={styles.extraLinks}>
                    <button className={styles.compareButton}>Compare loan rates</button>
                    <button className={styles.amortizationButton}>
                        Show amortization schedule
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoanCalculator;
