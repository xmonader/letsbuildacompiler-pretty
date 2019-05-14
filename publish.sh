set -ex
mdbook build -d docs
cp -f highlight.js docs/

crowbook letsbuildacompiler.book 

mkdir -p release
mv letsbuildacompiler.pdf release/
mv letsbuildacompiler.epub release/
mv letsbuildacompiler.html release/
