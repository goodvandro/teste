#########################################
#### Template de configuracao NodeJS ####
#### Alterar onde diz 'NOVODOMINIO'  ####
#########################################

proxy_cache_path /var/www/vhosts/visitsaotomeprincipe.st/tmp/cache keys_zone=saotomecache:10m levels=1:2
                 inactive=60s;

map $request_method $purge_method {
    PURGE 1;
    default 0;
}

#### Descomentar as proximas 4 linhas, caso o site necessite de reencaminhamentos de URL's ###
#map $uri $redirected_NOVODOMINIO{
#       default "none";
#       include /etc/nginx/sites-available/redirects-NOVODOMINIO.conf;
#}

#### Redirecionamento de http para https ####
server {

    server_name saotome.made2grow.com www.saotome.made2grow.com;
    listen 80;

    if ($host = www.saotome.made2grow.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = saotome.made2grow.com) {
        return 301 https://www.$host$request_uri;
    } # managed by Certbot

    return 404; # managed by Certbot
}

#### Redirecionamento para www ####
server {
    server_name saotome.made2grow.com;
    listen 443 ssl http2; # managed by Certbot
#    ssl_certificate /etc/letsencrypt/live/saotome.made2grow.com/fullchain.pem; # managed by Certbot
#    ssl_certificate_key /etc/letsencrypt/live/saotome.made2grow.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
    
    return 301 $scheme://www.saotome.made2grow.com$request_uri;
    
    ssl_certificate /etc/letsencrypt/live/saotome.made2grow.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/saotome.made2grow.com/privkey.pem; # managed by Certbot
}

#### Configuracao principal - Site HTTPS com WWW ####
server {
    server_name www.saotome.made2grow.com;
    listen 443 ssl http2; # managed by Certbot
#    ssl_certificate /etc/letsencrypt/live/saotome.made2grow.com/fullchain.pem; # managed by Certbot
#    ssl_certificate_key /etc/letsencrypt/live/saotome.made2grow.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
    ### Descomentar a proxima linha, caso o site necessite de reencaminhamentos de URL's ###
    #if ($redirected_NOVODOMINIO != "none") { rewrite ^ $redirected_NOVODOMINIO permanent; }


    access_log  /var/log/nginx/domains/visitsaotomeprincipe.st.log combined;
    error_log   /var/log/nginx/domains/visitsaotomeprincipe.st.error.log error;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         http://127.0.0.1:3011;

        proxy_cache        saotomecache;

        #proxy_cache_purge  $purge_method;

    }


    location ~* ^.+\.(gif|jpg|jpeg|png|wmv|avi|mpg|mpeg|mp4|htm|html|mp3|swf|ico|flv)$ {
       root /var/www/vhosts/visitsaotomeprincipe.st/nodejs/frontend/static;
       expires max;
    }
        gzip on;
        gzip_vary on;
        gzip_min_length 10240;
        gzip_proxied expired no-cache no-store private auth;
        gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml;
        gzip_disable "MSIE [1-6]\.";


    ssl_certificate /etc/letsencrypt/live/saotome.made2grow.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/saotome.made2grow.com/privkey.pem; # managed by Certbot
}
