
const KRA_TAX_PERCENTAGE = 0.3;
const NHIF_DAILY_RATE = 500;
const NSSF_PERCENTAGE = 0.06;

const basic_salary = prompt("Enter your basic salary: ");
const basic_salary_number = parseFloat(basic_salary);

const gross_salary = basic_salary_number + NHIF_DAILY_RATE * 30;


const kra_tax = gross_salary * KRA_TAX_PERCENTAGE;


const nhif_deductions = NHIF_DAILY_RATE * 30;


const nssf_deductions = gross_salary * NSSF_PERCENTAGE;


const net_salary = gross_salary - kra_tax - nhif_deductions - nssf_deductions;

console.log("Gross Salary: " + gross_salary);
console.log("KRA Tax: " + kra_tax);
console.log("NHIF Deductions: " + nhif_deductions);
console.log("NSSF Deductions: " + nssf_deductions);
console.log("Net Salary: " + net_salary);