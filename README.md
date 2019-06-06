# How does it works ?
> This project was made to understand http requests , put , delete, get and post.
> this project is working with mongodb. we recomend use postman or insomia to prove the apis.
>next we provide you the commands to install all dependencies
### To install all dependencies in package.json type the following command
```bash
$ npm install
```
### command to run the rest api using a npm commandconfigured in package.json
```bash
$ npm start
```
# Bonus
### To install mongo db in mac os with Homebrew.
```bash
$ brew update
```
### After updating Homebrew.
```bash
$ brew install mongodb
```
### create the “db” directory. This is where the Mongo data files will live. You can create the directory in the default location by running but you should be root user before to run this command.
```bash
$ mkdir -p /data/db
```
### Make sure that the /data/db directory has the right permissions by running.
```bash
$ sudo chown -R `id -un` /data/db
```




