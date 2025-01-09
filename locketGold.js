// locketGold.js
let response = JSON.parse($response.body);

// Chỉnh sửa phản hồi để kích hoạt Locket Gold
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

$done({ body: JSON.stringify(response) });
