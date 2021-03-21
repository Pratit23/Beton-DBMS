import React from 'react'

function CouponTable({ rows }) {
  console.log(rows)
  return (
    <div id="AllCoupons">
      <table className="bordered highlight responsive-table">
        <thead>
          <tr>
            <th>Coupon Name</th>
            <th>Amount</th>
            <th>validity</th>
            <th>Assigned</th>
            <th>User</th>
          </tr>
        </thead>
        {
          rows.length != 0 ? (
            rows.map(r => {
              return (
                <tr>
                  <td>{r.name}</td>
                  <td>{r.amount}</td>
                  <td>{r.validity}</td>
                  <td>{r.assigned ? "Yes" : "No"}</td>
                  <td>{r.assigned ? r.userID.name : "-"}</td>
                </tr>
              )
            })
          ) : null
        }
        <tbody>

        </tbody>
      </table>
    </div>
  )
}

export default CouponTable
