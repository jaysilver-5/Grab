FROM golang:1.11.0-alpine3.8 AS build
RUN apk --no-cache add gcc g++ make ca-certificates
WORKDIR /go/src/grab/account
COPY vendor ../vendor
COPY account ./
RUN go build -o /go/bin/app ./cmd/account/main.go

FROM alpine:3.8
WORKDIR /usr/bin
COPY --from=build /go/bin .
EXPOSE 8080
CMD ["app"]
