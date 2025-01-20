FROM python:3.10-slim

# Set working directory
WORKDIR /app

# copy file ke dalam container
COPY . /app

# install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# jalankan aplikasi
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "5000", "--reload"]