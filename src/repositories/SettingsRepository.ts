import { EntityRepository, Repository } from 'typeorm'
import { Setting } from '../entities/Seeting'

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository }
