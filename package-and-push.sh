rm -r build
npm run build
tar -cf build.tar build/
scp build.tar thegeekylad@10.0.0.74:/home/thegeekylad/ServerExperiments/house-cursor/frontend/
rm -r build.tar