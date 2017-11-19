# Django React Kit
Starter kit for building a Django app with React.

## Usage
- Install django app: `pip install -r requirments.txt`
- Install Yarn: https://yarnpkg.com/en/docs/install
- Install node modules in `/static/`: `yarn add`


## Build js assets
```
npm run build
```

## collectstatic
```
python manage.py collectstatic -i node_modules -i yarn.lock -i package.json -i src --noinput
```

## TODOs
- Dev and prod environments for JS builds
