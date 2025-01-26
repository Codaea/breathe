#!/bin/bash
pnpm run build

AA="$(base64 < dist/index.html)"

BB="data:text/html;base64,$AA"

echo $BB
echo "Creating Qr Code..."
qrencode -t PNG -o dist/qrcode.png "$BB"
echo "Built QR Code to ./dist/qrcode.png"