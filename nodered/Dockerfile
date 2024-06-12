FROM nodered/node-red:3.1.9

# Install additional nodes
RUN cd /data && npm install \ 
    @5minds/node-red-contrib-processcube@0.3.3 \
    @flowfuse/node-red-dashboard \
    node-red-debugger \
    node-red-contrib-eml \
    @vergissberlin/node-red-contrib-mjml \
    node-red-contrib-mssql-plus \
    node-red-contrib-openai \
    node-red-contrib-postgresql \
    node-red-contrib-soap-plus \
    node-red-node-email \
    openapi-red@1.2.5

