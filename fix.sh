#!/bin/sh

GREEN='\033[1;32m'

echo "-----------------------------------------------------------";
echo " DELETE OLD FILES.                                         ";
echo "-----------------------------------------------------------";

rm -rf node_modules
rm -rf .next
rm -rf .husky
rm -rf coverage
printf "${GREEN} ✓ Successful.${NC}\n";

echo "-----------------------------------------------------------";
echo " DOWNLOAD DEPENDENCES.                                     ";
echo "-----------------------------------------------------------";
yarn 
printf "${GREEN} ✓ Successful.${NC}\n";

echo "-----------------------------------------------------------";
echo " CONFIGURING HUSKY AND LINT STAGED                         ";
echo "-----------------------------------------------------------";
yarn prepare
printf "${GREEN} ✓ Successful.${NC}\n";
