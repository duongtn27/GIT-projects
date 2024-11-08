import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from './entities/histories.entity';
import { CreateHistoryDto } from './dto/create-history.dto';

@Injectable()
export class HistoriesService {
    constructor(
        @InjectRepository(History)
        private historyRepository: Repository<History>,
    ) { }

    async create(createHistoryDto: CreateHistoryDto) {
        const history = this.historyRepository.create(createHistoryDto);
        return this.historyRepository.save(history);
    }

    async findAll(): Promise<History[]> {
        return this.historyRepository.find();
    }

    async findOne(historyID: string): Promise<History | null> {
        // return null;
        return this.historyRepository.findOneBy({historyId : historyID} );
    }

    async remove(historyID: string) {
        await this.historyRepository.delete(historyID);
    }
}
