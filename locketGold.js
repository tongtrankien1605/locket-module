let response = JSON.parse($response.body);

// Logic để kiểm tra User-Agent và áp dụng mapping
const mapping = {
  'Locket': ['Gold']  // Có thể thêm các User-Agent khác tại đây
};

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
const match = Object.keys(mapping).find(e => ua.includes(e));

if (match) {
  // Cập nhật quyền Gold nếu có match
  response.subscriber = {
    original_app_user_id: "locket_user_12345",
    subscriptions: {
      "locket.gold": {
        billing_issues_detected_at: null,
        expires_date: "2099-12-31T23:59:59Z",
        is_sandbox: false,
        original_purchase_date: "2023-01-01T00:00:00Z",
        ownership_type: "PURCHASED",
        period_type: "lifetime",
        purchase_date: "2023-01-01T00:00:00Z",
        store: "app_store",
      },
    },
    entitlements: {
      gold: {
        expires_date: "2099-12-31T23:59:59Z",
        product_identifier: "locket.gold",
        purchase_date: "2023-01-01T00:00:00Z",
      },
    },
  };
}

$done({ body: JSON.stringify(response) });
