curl -X POST https://exp.host/--/api/v2/push/send \
  -H "Content-Type: application/json" \
  -d '{
    "to": "ExponentPushToken[x5ovlsMzihouUEJTlxpnda]",
    "title": "Ola!",
    "body": "Etapa 2 concluida com sucesso!",
    "data": { "foo": "bar" }
  }'
