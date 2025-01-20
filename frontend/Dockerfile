FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy file ke dalam container
COPY . /app

# Install dependencies
RUN npm install

# Build aplikasi frontend
RUN npm run build

# Jalankan server untuk serve frontend
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]