server {
    server_name admin.saotome.made2grow.com www.admin.saotome.made2grow.com;
    
    listen 443 ssl http2;
#    ssl_certificate /etc/letsencrypt/live/admin.saotome.made2grow.com/fullchain.pem; # managed by Certbot
#    ssl_certificate_key /etc/letsencrypt/live/admin.saotome.made2grow.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    access_log  /var/log/nginx/domains/admin.visitsaotomeprincipe.st.com.log combined;
    error_log   /var/log/nginx/domains/admin.visitsaotomeprincipe.st.error.log error;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         http://127.0.0.1:5007;

    }

    ssl_certificate /etc/letsencrypt/live/admin.saotome.made2grow.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/admin.saotome.made2grow.com/privkey.pem; # managed by Certbot

}

server {
    listen 80;
    server_name admin.saotome.made2grow.com www.admin.saotome.made2grow.com;

    if ($host = www.admin.saotome.made2grow.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = admin.saotome.made2grow.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    return 404; # managed by Certbot

}
 
