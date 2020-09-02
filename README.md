## App
Build image for app
```bash
	cd apps/brounder
	docker build . -t brounder-frontend
```
Deploy with Kubectl
```bash
	kubectl create -f .\brounder\brounder.yaml
```

