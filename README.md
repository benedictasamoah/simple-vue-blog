
# Simple Vue Blog
A basic blog with Vue.js2、Vue-Router、webpack2 and iView, just install and run.

## Install
// install dependencies
```
npm install
```
## Run
### Development
// For the first time, run init to create index.html
```
npm run init
npm run dev
```
### Production(Build)
```
npm run build
```

### Application directory layout

    .
    ├── dist                    # Compiled files
    ├── src                     # Source files
    │   ├── components          # Load global components eg(navigation bar and footer)
    │   ├── config              # Basic configurations eg(env = prod or dev)
    │   └── images              # Image assets and resources
    │   ├── libs                # Custom libraries
    │   ├── template            # Generates index.html on npm run init or build
    │   └── views               # All page views eg (Home)
    │   ├── app.vue             # Default page layout
    │   ├── main.js             # Load all plugins and required dependencies
    │   └── router.js           # Set router paths
    │   └── vendor.js           # Load other required dependencies
    ├── theme                  # Customise theme

### License information
MIT


