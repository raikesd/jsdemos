FROM oraclelinux:7-slim
MAINTAINER	Donald Raikes

RUN		yum update -y && \
		yum install -y vim && \
			curl \
			gcc-c++ \
			mlocate \
			iptools \
			tar \
			gzip \
			bzip \
			which && \
		curl -sL https://rpm.nodesource.com/setup_8.x | bash - && \
		yum install -y nodejs && \
		npm install -g @oracle/ojet-cli && \
		echo "export PS1='\$PWD# '" >> /root/.bashrc

## create a test user
RUN		groupadd -g 8500 dba && \
		useradd -g 8500 -u 50491 -m -s /bin/bash user && \
		echo user:user | chpasswd && \
		echo "export PS1='\$PWD# '" >> /home/user/.bashrc && \
		mkdir /scratch && \
		chown user:dba /scratch
USER		user
WORKDIR	/scratch
VOLUME		["/scratch"]
