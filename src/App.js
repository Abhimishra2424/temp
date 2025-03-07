import React, { useRef } from 'react';

function App() {
  const printRef = useRef();

  const htmlTemplate = `
    <center>
      <table style="border-collapse: collapse; width: 96.5%;">
        <tbody>
          <tr>
            <td style="padding-left: 11pt; text-align: left; font-weight: bold; margin: 0;">
              No.: {data.trans_num}
            </td>
            <td style="padding-left: 37pt; text-indent: -26pt; text-align: left; font-weight: bold;">
              CIN NO. : {companyCinNo} <br /> GSTIN : {companyGst}
            </td>
            <td style="padding-right: 5pt; text-indent: 0pt; text-align: right; font-weight: bold; margin: 0;">
              Date : {data.trans_dt}
            </td>
          </tr>
        </tbody>
      </table>
      <table style="border-collapse: collapse; width: 96.5%; border: 1pt solid #000000;">
        <tbody>
          <tr>
            <td colSpan="5" style="text-align: center;">Quotation Cum Proforma Invoice</td>
          </tr>
          <tr>{branches}</tr>
        </tbody>
      </table>
      <table style="border-collapse: collapse; width: 96.5%; font-size: 8pt;">
        <tbody>
          <tr style="border-left: 1pt solid black; border-right: 1pt solid black;">
            <td style="width: 50%; padding: 5pt 0 5pt 0;">
              <p style="padding-left: 5pt; margin: 0;">Name <span>{data.customer_name}</span></p>
              <p style="padding-left: 51pt; padding-right: 84pt; text-indent: -46pt; margin: 0;">Address <span>{data.cust_registration_address}</span></p>
              <p style="padding-left: 5pt; margin: 0;">Phone Mobile : {data.cust_mobele_no}</p>
              <p style="padding-left: 5pt; margin: 0;">Financier <span>{finc_bank_name}</span></p>
              <p style="padding-left: 5pt; margin: 0;">E-Mail : {data.cust_email_id}</p>
              <p style="padding-left: 5pt; margin: 0;">SalesMan Name <span>{data.sales_consultant_name}</span></p>
            </td>
            <td style="width: 50%; padding: 5pt 0 5pt 0;">
              <p style="padding-left: 13pt;">Pan No : {data.cust_pan_no}</p>
              <p style="padding-left: 19pt;">Deliverat At: {data.shipping_party_address}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table style="border-collapse: collapse; width: 96.5%; font-size: 9px;" border="0">
        <tbody>
          <tr style="font-size: 11px;">
            <td style="width: 43%; border: 1pt solid black;">Model</td>
            <td style="width: 15%; border: 1pt solid black;">Qty.</td>
            <td style="width: 21%; border: 1pt solid black;">Unit Price</td>
            <td style="width: 21%; border: 1pt solid black;">Amount</td>
          </tr>
          <tr>
            <td style="border: 1pt solid black;"><p style="padding-left: 5pt; font-size: 8pt;">{data.variant}</p></td>
            <td style="border: 1pt solid black;"><p style="text-align: center; font-size: 8pt;">1</p></td>
            <td style="border: 1pt solid black;"><p style="text-align: right; font-size: 8pt; padding-right: 2pt;">{Unit_Price}</p></td>
            <td style="border: 1pt solid black;"><p style="text-align: right; font-size: 8pt;">{Unit_Price}</p></td>
          </tr>
          <tr>
            <td style="border: 1pt solid black;"></td>
            <td style="border: 1pt solid black;"></td>
            <td style="border: 1pt solid black;"><p style="padding-top: 5pt; padding-left: 2pt; font-size: 8pt;">Sub Total</p></td>
            <td style="border: 1pt solid black;"><p style="text-align: right; padding-top: 5pt; font-size: 8pt;">{Unit_Price}</p></td>
          </tr>
          <tr>
            <td style="border: 1pt solid black;"></td>
            <td style="border: 1pt solid black;"></td>
            <td style="border: 1pt solid black;"><p style="padding-top: 5pt; padding-left: 2pt; font-size: 8pt;">Discount</p></td>
            <td style="border: 1pt solid black;"><p style="text-align: right; padding-top: 5pt; font-size: 8pt;">{discount}</p></td>
          </tr>
          <tr>
            <td style="border: 1pt solid black;"></td>
            <td style="border: 1pt solid black;"></td>
            <td style="border: 1pt solid black;"><p style="padding-top: 5pt; padding-left: 2pt; font-size: 8pt;">GST Amount</p></td>
            <td style="border: 1pt solid black;"><p style="text-align: right; padding-top: 5pt; font-size: 8pt;">{GST_amt}</p></td>
          </tr>
          <tr>
            <td style="border: 1pt solid black;"></td>
            <td style="border: 1pt solid black;"></td>
            <td style="border: 1pt solid black;"><p style="padding-top: 5pt; padding-left: 2pt; font-size: 8pt;">Net Total</p></td>
            <td style="border: 1pt solid black;"><p style="text-align: right; padding-top: 5pt; font-size: 8pt;">{net_total}</p></td>
          </tr>
        </tbody>
      </table>
      <table style="border-collapse: collapse; width: 96.5%;" border="0">
        <tbody>
          <tr>
            <td style="width: 100%; border-left: 1pt solid black; border-right: 1pt solid black;" colSpan="4">
              <p style="padding-left: 11pt; margin: 0;">Rupees {net_total}</p>
            </td>
          </tr>
          <tr>
            <td style="width: 100%; border-left: 1pt solid black; border-right: 1pt solid black; border-bottom: 1pt solid black;" colSpan="4">
              <p style="padding-left: 11pt; margin: 0;">IMPORTANT</p>
              <table style="width: 96.5%; font-size: 10px;" border="0">
                <tbody>{terms}</tbody>
              </table><br/>
              <p style="padding-top: 6pt; text-align: right; margin: 0;">For {companyName}</p><br/>
              <p style="padding-left: 5pt; margin: 0;">BRANCHES:</p>
              <table><tbody>{branchDetails}</tbody></table>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  `;

  const data = {
    trans_num: '12345',
    trans_dt: '2025-03-06',
    customer_name: 'John Doe',
    cust_registration_address: '123 Main St',
    cust_mobele_no: '555-1234',
    cust_email_id: 'john@example.com',
    sales_consultant_name: 'Jane Smith',
    cust_pan_no: 'ABCDE1234F',
    shipping_party_address: '456 Elm St',
    variant: 'Model X',
    companyCinNo: 'CIN123',
    companyGst: 'GST123',
    finc_bank_name: 'Bank XYZ',
    Unit_Price: '25000.00',
    discount: '500',
    GST_amt: '1800.00',
    net_total: '12400.00',
    companyName: 'ABC Corp',
    branches: [
      { name: 'Branch A', details: 'Address A' },
      { name: 'Branch B', details: 'Address B' },
    ],
    terms: ['Term 1<br/>Details 1', 'Term 2<br/>Details 2'],
  };


  const saveToLocalStorage = () => {
    localStorage.setItem('invoiceTemplate', htmlTemplate);
  };


  const handlePrint = () => {

    const storedTemplate = localStorage.getItem('invoiceTemplate');
    if (!storedTemplate) {
      saveToLocalStorage();
      return;
    }


    let populatedHtml = storedTemplate
      .replace('{data.trans_num}', data.trans_num)
      .replace('{companyCinNo}', data.companyCinNo)
      .replace('{companyGst}', data.companyGst)
      .replace('{data.trans_dt}', data.trans_dt)
      .replace('{data.customer_name}', data.customer_name)
      .replace('{data.cust_registration_address}', data.cust_registration_address)
      .replace('{data.cust_mobele_no}', data.cust_mobele_no)
      .replace('{finc_bank_name}', data.finc_bank_name)
      .replace('{data.cust_email_id}', data.cust_email_id)
      .replace('{data.sales_consultant_name}', data.sales_consultant_name)
      .replace('{data.cust_pan_no}', data.cust_pan_no)
      .replace('{data.shipping_party_address}', data.shipping_party_address)
      .replace('{data.variant}', data.variant)
      .replace(/{Unit_Price}/g, data.Unit_Price)
      .replace('{discount}', data.discount)
      .replace('{GST_amt}', data.GST_amt)
      .replace('{net_total}', data.net_total)
      .replace('{companyName}', data.companyName)

      .replace('{branches}', data.branches.map(branch => `<td style="text-align: center; border-top: 1pt solid #000000;">${branch.name}</td>`).join(''))
      .replace('{terms}', data.terms.map((term, i) => `
        <tr>
          <td style="width: 1%;"></td>
          <td style="width: 3%;">${i + 1})</td>
          <td style="width: 96%;">${term}</td>
        </tr>
      `).join(''))
      .replace('{branchDetails}', data.branches.map(branch => `
        <tr>
          <td style="width: 20%; font-weight: bold; padding-left: 5pt;">${branch.name} :</td>
          <td style="width: 80%;">${branch.details}</td>
        </tr>
      `).join(''));


    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Invoice</title></head><body>');
    printWindow.document.write(populatedHtml);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={saveToLocalStorage}>Save Template to LocalStorage</button>
      <button onClick={handlePrint} style={{ marginLeft: '10px' }}>Print Invoice</button>

      <div ref={printRef} style={{ display: 'none' }}></div>
    </div>
  );
}

export default App;