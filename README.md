# Robloxians.com

The official website for RoWhoIs.

## Deployment

Due to the simple, static nature of the RoWhoIs website, creating instances, even ones not listed below, is incredibly easy.

### NGINX

1. Clone the repository
```bash
 git clone https://github.com/RoWhoIs/robloxians.com ~/RoWhoIs/
 ```
2. Configure NGINX
```
server {
    listen 80;
    server_name robloxians.com;

    root ~/RoWhoIs/;

    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

3. Enable the site
```bash
sudo ln -s /etc/nginx/sites-available/robloxians.com /etc/nginx/sites-enabled/
```

4. Reload NGINX
```bash
sudo systemctl reload nginx
```

### Vercel
1. Fork the repository
2. On the Vercel dashboard, click `Add New...`, then `Project`
3. Select the forked repository
4. Click `Deploy`