export type Mutations = {
  id: string;
  trx_id: string;
  partner_id: string;
  type: string;
  description: string;
  amount: number;
  beginning_balance: number;
  ending_balance: number;
  created_at: string;
};

export const getListMutation = {
  data: [
    {
      id: "01J62J9F3K1N756J9Q0V10FPC5",
      trx_id: "01J62HZCSB9TF3H83RFP1FNV93",
      partner_id: "01J62G6D26CK7T933QBPC9YCPV",
      type: "CREDIT",
      description: "Top Up Saldo",
      amount: 10000,
      beginning_balance: 0,
      ending_balance: 10000,
      created_at: "2024-08-24T16:07:42Z",
    },
    {
      id: "01J654WM08TV9MKYZXCYMJ49X5",
      trx_id: "01J62HZCSB9TF3H83RFP1FNV93",
      partner_id: "01J62G6D26CK7T933QBPC9YCPV",
      type: "DEBIT",
      description: "100 Diamond Mobile Legends",
      amount: 10000,
      beginning_balance: 0,
      ending_balance: 10000,
      created_at: "2024-08-24T16:07:42Z",
    },
    {
      id: "01J67GH89K0J8F6H6P1L9MF2A7",
      trx_id: "01J67ABCTF1GX9H5NMLV8P9CD2",
      partner_id: "01J64DE34QWE9T5R7VSDFY8QWM",
      type: "CREDIT",
      description: "Receive Payment for Services",
      amount: 20000,
      beginning_balance: 10000,
      ending_balance: 30000,
      created_at: "2024-09-01T10:15:30Z",
    },
    {
      id: "01J67JKL89G0H6F7M9P2QW7Z1B",
      trx_id: "01J67ABCTF1GX9H5NMLV8P9CD2",
      partner_id: "01J64DE34QWE9T5R7VSDFY8QWM",
      type: "DEBIT",
      description: "Purchase Game Subscription",
      amount: 5000,
      beginning_balance: 30000,
      ending_balance: 25000,
      created_at: "2024-09-02T12:45:50Z",
    },
    {
      id: "01J68MNOP9KL1F8H8Q2RX5T7S9",
      trx_id: "01J68CDEF2H9K8L7PRS1MV4Z6X",
      partner_id: "01J65FG45GHY8U6S8TUVB7R9NM",
      type: "CREDIT",
      description: "Top Up Saldo",
      amount: 15000,
      beginning_balance: 25000,
      ending_balance: 40000,
      created_at: "2024-09-10T09:20:10Z",
    },
    {
      id: "01J68STU9OPL2F9J9R4TY7Z6Q0",
      trx_id: "01J68CDEF2H9K8L7PRS1MV4Z6X",
      partner_id: "01J65FG45GHY8U6S8TUVB7R9NM",
      type: "DEBIT",
      description: "Purchase Online Course",
      amount: 15000,
      beginning_balance: 40000,
      ending_balance: 25000,
      created_at: "2024-09-11T14:30:15Z",
    },
    {
      id: "01J69VWX0QRS3F0K0S6UZ8A1B2",
      trx_id: "01J69GHIL3J8L9N8QWZ2PV5Y4C",
      partner_id: "01J66HI56HJK9V7V9XWCZ0E1ON",
      type: "CREDIT",
      description: "Refund for Product",
      amount: 10000,
      beginning_balance: 25000,
      ending_balance: 35000,
      created_at: "2024-09-20T08:40:20Z",
    },
    {
      id: "01J69YZ1RSTU4F1L1W8YZ9B3D4",
      trx_id: "01J69GHIL3J8L9N8QWZ2PV5Y4C",
      partner_id: "01J66HI56HJK9V7V9XWCZ0E1ON",
      type: "DEBIT",
      description: "Buy Groceries",
      amount: 5000,
      beginning_balance: 35000,
      ending_balance: 30000,
      created_at: "2024-09-21T16:55:25Z",
    },
  ],
};
