<html>
<body>
${msg("passwordResetBodyHtml",kcSanitize(link), linkExpiration, realmName, linkExpirationFormatter(linkExpiration))?no_esc}
</body>
</html>